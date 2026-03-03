import React, { useState, useEffect } from "react";
import { getFavoriteStatus, toggleFavorite } from "../../api/favorites-api";
import { useAuthContext } from "../../contexts/AuthContext";
import "./Favorites.css";

export default function FavoriteButton({ dogId }) {
  const [favorited, setFavorited] = useState(false);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [animating, setAnimating] = useState(false);
  const { isAuthenticated } = useAuthContext();

  useEffect(() => {
    (async () => {
      try {
        const data = await getFavoriteStatus(dogId);
        setFavorited(data.favorited);
        setCount(data.count || 0);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    })();
  }, [dogId]);

  const handleToggle = async () => {
    if (!isAuthenticated || loading) return;
    setAnimating(true);
    try {
      const result = await toggleFavorite(dogId);
      setFavorited(result.favorited);
      setCount((prev) => (result.favorited ? prev + 1 : Math.max(0, prev - 1)));
    } catch (e) {
      console.error(e);
    } finally {
      setTimeout(() => setAnimating(false), 400);
    }
  };

  return (
    <button
      className={`favorite-btn ${favorited ? "favorited" : ""} ${animating ? "pop" : ""}`}
      onClick={handleToggle}
      disabled={!isAuthenticated || loading}
      title={
        !isAuthenticated
          ? "Log in to save favorites"
          : favorited
          ? "Remove from favorites"
          : "Add to favorites"
      }
    >
      <span className="favorite-heart">{favorited ? "♥" : "♡"}</span>
      <span className="favorite-label">
        {favorited ? "Saved" : "Save"}
      </span>
      {count > 0 && <span className="favorite-count">{count}</span>}
    </button>
  );
}
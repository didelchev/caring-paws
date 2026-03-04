import React, { useState, useEffect } from "react";
import { getComments, createComment, deleteComment } from "../../api/comments-api";
import { useAuthContext } from "../../contexts/AuthContext";
import "./Comments.css";

export default function Comments({ dogId }) {
  const [comments, setComments] = useState([]);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const { isAuthenticated, userId } = useAuthContext();

  useEffect(() => {
    (async () => {
      try {
        const data = await getComments(dogId);
        setComments(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    })();
  }, [dogId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    setSubmitting(true);
    try {
      const newComment = await createComment(dogId, text.trim());
      setComments((prev) => [newComment, ...prev]);
      setText("");
    } catch (e) {
      console.error(e);
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (commentId) => {
    try {
      await deleteComment(dogId, commentId);
      setComments((prev) => prev.filter((c) => c._id !== commentId));
    } catch (e) {
      console.error(e);
    }
  };

  const formatDate = (iso) => {
    const d = new Date(iso);
    return d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
  };

  return (
    <section className="comments-section">
      <h3 className="comments-title">
        <span className="comments-icon"></span>
        Community Reviews
        <span className="comments-count">{comments.length}</span>
      </h3>

      {isAuthenticated && (
        <form className="comment-form" onSubmit={handleSubmit}>
          <textarea
            className="comment-input"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Share your thoughts about this pup..."
            maxLength={500}
            rows={3}
          />
          <div className="comment-form-footer">
            <span className="char-count">{text.length}/500</span>
            <button
              type="submit"
              className="comment-submit"
              disabled={!text.trim() || submitting}
            >
              {submitting ? "Posting..." : "Post Review"}
            </button>
          </div>
        </form>
      )}

      {!isAuthenticated && (
        <div className="comment-login-prompt">
          <a href="/login">Log in</a> to leave a review
        </div>
      )}

      {loading ? (
        <div className="comments-loading">Loading reviews...</div>
      ) : comments.length === 0 ? (
        <div className="comments-empty">
          <p>No reviews yet. Be the first to share!</p>
        </div>
      ) : (
        <ul className="comments-list">
          {comments.map((c) => (
            <li key={c._id} className="comment-item">
              <div className="comment-avatar">
                {(c.ownerUsername || "?")[0].toUpperCase()}
              </div>
              <div className="comment-body">
                <div className="comment-header">
                  <span className="comment-author">{c.ownerUsername}</span>
                  <span className="comment-date">{formatDate(c.createdAt)}</span>
                </div>
                <p className="comment-text">{c.text}</p>
              </div>
              {userId === c._ownerId && (
                <button
                  className="comment-delete"
                  onClick={() => handleDelete(c._id)}
                  title="Delete comment"
                >
                  ×
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
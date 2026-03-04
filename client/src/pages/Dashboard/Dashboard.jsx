import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getDashboard } from "../../api/dashboard-api";
import { useAuthContext } from "../../contexts/AuthContext";
import Loading from "../../components/Loading/Loading";
import Footer from "../../components/Footer/Footer";
import "./Dashboard.css";

export default function Dashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("listings");
  const { isAuthenticated } = useAuthContext();

  useEffect(() => {
    if (!isAuthenticated) return;
    (async () => {
      try {
        const result = await getDashboard();
        setData(result);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    })();
  }, [isAuthenticated]);

  if (loading) return <Loading />;

  const listings = data?.myListings || [];
  const favorites = data?.myFavorites || [];

  return (
    <div className="dashboard-page">
      {/* Hero */}
      <div className="dashboard-hero">
        <div className="dashboard-avatar">
          {(data?.username || "U")[0].toUpperCase()}
        </div>
        <div className="dashboard-hero-info">
          <h1 className="dashboard-username">{data?.username}</h1>
          <p className="dashboard-email">{data?.email}</p>
        </div>
        <div className="dashboard-stats">
          <div className="stat-box">
            <span className="stat-number">{listings.length}</span>
            <span className="stat-label">Listed Pets</span>
          </div>
          <div className="stat-box">
            <span className="stat-number">{favorites.length}</span>
            <span className="stat-label">Saved Pets</span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="dashboard-tabs">
        <button
          className={`dash-tab ${activeTab === "listings" ? "active" : ""}`}
          onClick={() => setActiveTab("listings")}
        >
          My Listings
        </button>
        <button
          className={`dash-tab ${activeTab === "favorites" ? "active" : ""}`}
          onClick={() => setActiveTab("favorites")}
        >
          Saved Pets
        </button>
      </div>

      {/* Content */}
      <div className="dashboard-content">
        {activeTab === "listings" && (
          <>
            <div className="dashboard-section-header">
              <h2>My Listed Pets</h2>
              <Link to="/post-pet" className="dash-new-btn">+ List a New Pet</Link>
            </div>
            {listings.length === 0 ? (
              <div className="dashboard-empty">
                <p>You haven't listed any pets yet.</p>
                <Link to="/post-pet" className="dash-cta">List a Pet</Link>
              </div>
            ) : (
              <div className="dashboard-grid">
                {listings.map((dog) => (
                  <DashboardCard key={dog._id} dog={dog} showActions />
                ))}
              </div>
            )}
          </>
        )}

        {activeTab === "favorites" && (
          <>
            <div className="dashboard-section-header">
              <h2>Saved Pets</h2>
            </div>
            {favorites.length === 0 ? (
              <div className="dashboard-empty">
                <span>♡</span>
                <p>You haven't saved any pets yet.</p>
                <Link to="/petcatalog" className="dash-cta">Browse Pets</Link>
              </div>
            ) : (
              <div className="dashboard-grid">
                {favorites.map((dog) => (
                  <DashboardCard key={dog._id} dog={dog} />
                ))}
              </div>
            )}
          </>
        )}
      </div>

      <Footer />
    </div>
  );
}

function DashboardCard({ dog, showActions }) {
  return (
    <div className="dash-card">
      <Link to={`/petcatalog/${dog._id}`}>
        <img src={dog.imageUrl} alt={dog.name} className="dash-card-img" />
        <div className="dash-card-body">
          <h3 className="dash-card-name">{dog.name}</h3>
          <p className="dash-card-breed">{dog.breed}</p>
          <p className="dash-card-meta">
            <span>📍 {dog.location}</span>
            <span>· {dog.age}</span>
          </p>
        </div>
      </Link>
      {showActions && (
        <div className="dash-card-actions">
          <Link to={`/petcatalog/${dog._id}/edit`} className="dash-edit-btn">
            Edit
          </Link>
        </div>
      )}
    </div>
  );
}
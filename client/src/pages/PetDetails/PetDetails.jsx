
import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import dogsAPI from "../../api/dogs-api";
import { useGetOneDogs } from "../../hooks/useDogs";
import { useAuthContext } from "../../contexts/AuthContext";
import Loading from "../../components/Loading/Loading";
import Comments from "../../components/Comments/Comments";
import FavoriteButton from "../../components/Favorites/FavoriteButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import "./PetDetails.css";

export default function PetDetails() {
  const { id } = useParams();
  const [dog] = useGetOneDogs(id);
  const navigate = useNavigate();
  const { isAuthenticated, userId } = useAuthContext();

  if (!dog) return <Loading />;

  const isOwner = userId === dog._ownerId?.toString();

  const dogDeleteHandler = async () => {
    const isConfirmed = confirm(`Are you sure you want to remove ${dog.name}?`);
    if (!isConfirmed) return;
    try {
      await dogsAPI.remove(id);
      navigate("/petcatalog");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="pet-details-page">
      <div className="pet-details-hero">
        {/* Image */}
        <div className="pet-details-image-wrap">
          <div
            className="pet-details-blur-bg"
            style={{ backgroundImage: `url(${dog.imageUrl})` }}
          />
          <img src={dog.imageUrl} alt={dog.name} className="pet-details-img" />
        </div>

        {/* Info panel */}
        <div className="pet-details-info">
          <div className="pet-details-top-row">
            <h1 className="pet-details-name">{dog.name}</h1>
            <FavoriteButton dogId={id} />
          </div>

          <p className="pet-details-location">
            <FontAwesomeIcon icon={faLocationDot} />
            &nbsp;{dog.location}
          </p>

          <div className="pet-details-tags">
            <span className="pet-tag">{dog.breed}</span>
            <span className="pet-tag">{dog.age}</span>
            <span className="pet-tag">{dog.sex}</span>
            <span className="pet-tag">{dog.size}</span>
            <span className="pet-tag">{dog.color}</span>
          </div>

          <div className="pet-details-attributes">
            {[
              { label: "Breed", value: dog.breed },
              { label: "Age", value: dog.age },
              { label: "Sex", value: dog.sex },
              { label: "Size", value: dog.size },
              { label: "Color", value: dog.color },
              { label: "Location", value: dog.location },
              { label: "Contact", value: dog.phone },
            ].map(({ label, value }) =>
              value ? (
                <div key={label} className="pet-attr-row">
                  <span className="pet-attr-label">{label}</span>
                  <span className="pet-attr-value">{value}</span>
                </div>
              ) : null
            )}
          </div>

          {isOwner && isAuthenticated && (
            <div className="pet-details-actions">
              <Link to={`/petcatalog/${id}/edit`} className="pet-edit-btn">
                Edit
              </Link>
              <button className="pet-delete-btn" onClick={dogDeleteHandler}>
                Delete
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Description */}
      {dog.description && (
        <div className="pet-description-section">
          <h2>About {dog.name}</h2>
          <p>{dog.description}</p>
        </div>
      )}

      {/* Comments */}
      <Comments dogId={id} />
      

      <div style={{ height: "3em" }} />
    </div>
  );
}







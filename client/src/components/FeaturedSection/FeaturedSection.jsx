import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import dogsAPI from "../../api/dogs-api";
import "./FeaturedSection.css";

function SkeletonCard() {
  return (
    <div className="featured-card featured-card--skeleton">
      <div className="skel skel-img" />
      <div className="featured-card-body">
        <div className="skel skel-title" />
        <div className="skel skel-breed" />
        <div className="skel skel-location" />
      </div>
    </div>
  );
}

export default function FeaturedSection() {
  const [featuredDogs, setFeaturedDogs] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const result = await dogsAPI.getAll();
        setFeaturedDogs(result.reverse().slice(0, 3));
      } catch (e) {
        console.error(e);
        setFeaturedDogs([]);
      }
    })();
  }, []);

  return (
    <section className="featured-section">
      <div className="featured-inner">

        <div className="featured-header">
          <div>
            <div className="section-tag">Just listed</div>
            <h2 className="section-title">Meet the newest arrivals</h2>
            <p className="section-subtitle">
              These dogs just joined Caring Paws and are looking for their forever home.
            </p>
          </div>
          <Link to="/petcatalog" className="featured-see-all">
            See all dogs <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>

        <div className="featured-grid">
          {featuredDogs === null ? (
            <>
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </>
          ) : featuredDogs.length === 0 ? (
            <p className="featured-empty">No pets listed yet. Check back soon!</p>
          ) : (
            featuredDogs.map((dog) => (
              <Link key={dog._id} to={`/petcatalog/${dog._id}`} className="featured-card">
                <div className="featured-card-img-wrap">
                  <img src={dog.imageUrl} alt={dog.name} className="featured-card-img" />
                  <div className="featured-card-sex-badge">{dog.sex}</div>
                </div>
                <div className="featured-card-body">
                  <div className="featured-card-top">
                    <h3 className="featured-card-name">{dog.name}</h3>
                    <span className="featured-card-age">{dog.age}</span>
                  </div>
                  <p className="featured-card-breed">{dog.breed}</p>
                  <p className="featured-card-location">
                    <FontAwesomeIcon icon={faLocationDot} />
                    {dog.location}
                  </p>
                </div>
              </Link>
            ))
          )}
        </div>

      </div>
    </section>
  );
}
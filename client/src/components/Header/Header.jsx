import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faHouse, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

export default function Header() {
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-overlay" />

      <div className="hero-content">
        <h1 className="hero-title">
          Find your<br />
          <span className="hero-title-accent">furever</span> friend
        </h1>
        <p className="hero-subtitle">
          Thousands of dogs are looking for a loving home. Browse listings, save your
          favourites, and connect with rehomers — all in one place.
        </p>

        <div className="hero-actions">
          <Link to="/petcatalog" className="hero-btn hero-btn--primary">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            Browse dogs for adoption
          </Link>
          <Link to="/post-pet" className="hero-btn hero-btn--secondary">
            <FontAwesomeIcon icon={faHouse} />
            Rehome my pet
          </Link>
        </div>

      </div>
    </section>
  );
}
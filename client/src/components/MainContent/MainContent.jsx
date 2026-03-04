import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart, faHandshake, faShieldHeart, faArrowRight
} from "@fortawesome/free-solid-svg-icons";
import "./MainContent.css";

const VALUES = [
  {
    icon: faHeart,
    title: "Kind To Everyone",
    body: "Every pet deserves to be safe, loved and respected. Great adopters shouldn't be put off by complicated processes, and people rehoming pets shouldn't face judgement.",
  },
  {
    icon: faHandshake,
    title: "Advocate Adoption",
    body: "Adoption reduces demand for puppy farming, industrial-scale breeding, and illegal imports. We are proud supporters of #AdoptDontShop.",
  },
  {
    icon: faShieldHeart,
    title: "Responsible Rehoming",
    body: "We believe in finding the right match — not rushing. We always prioritise pet welfare and offer a safer, more ethical alternative to online marketplaces.",
  },
];

export default function MainContent() {
  return (
    <div className="main-content">

      {/* ── Values section ── */}
      <section className="values-section">
        <div className="values-inner">
          <div className="section-tag">Our values</div>
          <h2 className="section-title">Why Choose Caring Paws?</h2>
          <p className="section-subtitle">
            We're not just a listing site. We're a community built on trust, care, and the belief
            that every dog deserves a second chance.
          </p>

          <div className="values-grid">
            {VALUES.map(({ icon, title, body }) => (
              <div key={title} className="value-card">
                <div className="value-icon-wrap">
                  <FontAwesomeIcon icon={icon} className="value-icon" />
                </div>
                <h3 className="value-title">{title}</h3>
                <p className="value-body">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA banner ── */}
      <section className="cta-section">
        <div className="cta-inner">
          <div className="cta-text">
            <h2>Ready to make a difference?</h2>
            <p>
              Create a free account and start browsing dogs that need a home,
              or list your own pet for adoption in minutes.
            </p>
          </div>
          <div className="cta-buttons">
            <Link to="/register" className="cta-btn cta-btn--primary">
              Create free account <FontAwesomeIcon icon={faArrowRight} />
            </Link>
            <Link to="/petcatalog" className="cta-btn cta-btn--ghost">
              Browse dogs
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
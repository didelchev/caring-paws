import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">

        {/* Brand */}
        <div className="footer-brand">
          <div className="footer-logo">
            <FontAwesomeIcon icon={faPaw} />
            <span>Caring Paws</span>
          </div>
          <p className="footer-brand-desc">
            Connecting dogs in need with loving homes across Bulgaria. Free to list, free to browse.
          </p>
        </div>

        {/* Links */}
        <div className="footer-col">
          <h4>Navigate</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/petcatalog">Find a Pet</Link></li>
            <li><Link to="/post-pet">List a Pet</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Account</h4>
          <ul>
            <li><Link to="/login">Sign in</Link></li>
            <li><Link to="/register">Create account</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li><a href="mailto:support@caringpaws.com">support@caringpaws.com</a></li>
            <li><span>+359 88 000 0000</span></li>
            <li><span>Sofia, Bulgaria</span></li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Caring Paws. All rights reserved.</p>
        <p>#AdoptDontShop</p>
      </div>
    </footer>
  );
}
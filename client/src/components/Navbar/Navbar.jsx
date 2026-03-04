import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPortal } from "react-dom";
import { assets } from "../../assets/assets";
import { useAuthContext } from "../../contexts/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

function MobileDrawer({ isOpen, isAuthenticated, location }) {
  return createPortal(
    <>
      {/* Backdrop */}
      <div className={`drawer-backdrop ${isOpen ? "drawer-backdrop--visible" : ""}`} />

      {/* Drawer */}
      <div className={`drawer ${isOpen ? "drawer--open" : ""}`}>
        <ul className="drawer-list">
          <li>
            <Link to="/" className={location.pathname === "/" ? "nav-active" : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/petcatalog" className={location.pathname.startsWith("/petcatalog") ? "nav-active" : ""}>
              Find a Pet
            </Link>
          </li>
          {isAuthenticated ? (
            <>
              <li><Link to="/post-pet">List a Pet</Link></li>
              <li>
                <Link to="/dashboard" className={location.pathname === "/dashboard" ? "nav-active" : ""}>
                  Dashboard
                </Link>
              </li>
              <li><Link to="/logout" className="drawer-logout">Logout</Link></li>
            </>
          ) : (
            <>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/register" className="drawer-register">Register</Link></li>
            </>
          )}
        </ul>
      </div>
    </>,
    document.body
  );
}

function Navbar() {
  const { isAuthenticated } = useAuthContext();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const solid = scrolled || !isHome;

  return (
    <>
      <nav className={`navbar ${solid ? "navbar-solid" : ""}`}>
        <Link to="/" className="navbar-logo">
          <img src={assets.logo} alt="logo" className="logo-img" />
          <span className="company-name">Caring Paws</span>
        </Link>

        {/* Desktop menu */}
        <ul className="navbar-menu">
          <li><Link to="/" className={location.pathname === "/" ? "nav-active" : ""}>Home</Link></li>
          <li><Link to="/petcatalog" className={location.pathname.startsWith("/petcatalog") ? "nav-active" : ""}>Find a Pet</Link></li>
          {isAuthenticated ? (
            <>
              <li><Link to="/post-pet">List a Pet</Link></li>
              <li><Link to="/dashboard" className={location.pathname === "/dashboard" ? "nav-active" : ""}>Dashboard</Link></li>
              <li><Link to="/logout" className="nav-logout">Logout</Link></li>
            </>
          ) : (
            <>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/register" className="nav-register-btn">Register</Link></li>
            </>
          )}
        </ul>

        {/* Hamburger */}
        <button
          className="navbar-hamburger"
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
        </button>
      </nav>

      <MobileDrawer
        isOpen={menuOpen}
        isAuthenticated={isAuthenticated}
        location={location}
      />
    </>
  );
}

export default Navbar;
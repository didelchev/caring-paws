// import React from 'react'
// import { Link } from 'react-router-dom'
// import { assets } from '../../assets/assets'
// import { useAuthContext } from '../../contexts/AuthContext'
// import Logout from '../Logout/Logout'
// import './Navbar.css'

// function Navbar() {

//   const { isAuthenticated} = useAuthContext()
  

//   return (
//     <div className='navbar'>
//       <Link to={"/"}>
//       <span className="navbar-logo">
//       <img src={assets.logo} alt="logo" className='logo-img' />
//       <span className='company-name'>Caring Paws</span>
//       </span>
//       </Link>
        
//       <ul className="navbar-menu">
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/petcatalog">Find a Pet</Link></li>
//         {isAuthenticated ?(
//           <div className='user'>
//           <li><Link to="/post-pet">List a Pet</Link></li>
//           <li><Link to="/logout">Logout</Link></li>
//           </div>
//           )
//         : <div className='guest'>
//           <li><Link to="/login">Login</Link></li>
//           <li><Link to="/register">Register</Link></li>
//         </div>
//         }
        
        
//       </ul>
//     </div>
//   )
// }

// export default Navbar


import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { assets } from "../../assets/assets";
import { useAuthContext } from "../../contexts/AuthContext";
import "./Navbar.css";

function Navbar() {
  const { isAuthenticated } = useAuthContext();
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav className={`navbar ${scrolled || !isHome ? "navbar-solid" : ""}`}>
      <Link to="/" className="navbar-logo">
        <img src={assets.logo} alt="logo" className="logo-img" />
        <span className="company-name">Caring Paws</span>
      </Link>

      <ul className="navbar-menu">
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
            <li>
              <Link to="/post-pet">List a Pet</Link>
            </li>
            <li>
              <Link to="/dashboard" className={location.pathname === "/dashboard" ? "nav-active" : ""}>
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/logout" className="nav-logout">
                Logout
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register" className="nav-register-btn">
                Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
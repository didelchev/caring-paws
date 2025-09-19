import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
      <footer className="footer">
          <div className="footer-container">
              <div className="footer-section">
                  <h3>About Us</h3>
                  <p>Caring Paws is dedicated to helping you find your next furry friend. We connect pets in need with loving homes.</p>
              </div>
              <div className="footer-section">
                  <h3>Quick Links</h3>
                  <ul>
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="/petcatalog">Find a Pet</Link></li>
                      <li><Link to="/post-pet">List a Pet</Link></li>
                      <li><Link to="/login">Login</Link></li>
                      <li><Link to="/register">Register</Link></li>
                  </ul>
              </div>
              <div className="footer-section">
                  <h3>Contact Us</h3>
                  <p>Email: support@caringpaws.com</p>
                  <p>Phone: (123) 456-7890</p>
                  <p>Address: 123 Pet Street, Animal City, PA</p>
              </div>
          </div>
          <div className="footer-bottom">
              <p>&copy; 2024 Caring Paws. All rights reserved.</p>
          </div>
      </footer>
  );
};

export default Footer;
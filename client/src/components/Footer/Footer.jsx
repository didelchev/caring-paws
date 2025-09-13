import React from 'react';
import './Footer.css'

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
                      <li><a href="#">Home</a></li>
                      <li><a href="#">Find a Pet</a></li>
                      <li><a href="#">List a Pet</a></li>
                      <li><a href="#">Login</a></li>
                      <li><a href="#">Register</a></li>
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
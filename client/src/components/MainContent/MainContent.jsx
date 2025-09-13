import React from "react";
import "./MainContent.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";


export default function MainContent() {
  return (
    <div className="main-content">
      <div className="register-section">
        <div className="register-text">
          <h1>Register your Caring Paw account</h1>
          <p>
            Create your free account, and get ready to connect safely with
            thousands of adopters and pet rehomers
          </p>
        </div>  
        <div className="button">
          <button>
            <Link to='/register'>Register</Link>
          </button>
        </div>
      </div>
      <h1 className="description-header">Why Choose Caring Paws ?</h1>

      <div className="description">
        <div className="why-choose-us">
          <div className="icon">
            <img src={assets.hearts} />
          </div>
          <div className="details">
            <ul>
              <h2>Kind To Everyone</h2>
              <li>every pet deserves to be safe, loved and respected</li>
              <li>
                people who are great candidates for adoption shouldn't be put
                off by complicated processes or one-size-fits-all rules
              </li>
              <li>
                people who need to rehome their pets should be empowered to do
                so without being judged
              </li>
            </ul>
          </div>
        </div>
        <div className="why-choose-us">
          <div className="icon">
            <img src={assets.hands} />
          </div>
          <div className="details">
            <ul>
            <h2>Advocate Adoption</h2>
              <li>this value sits at the top of everything we do.</li>
              <li>
              Adoption reduces the demand for puppy farming, industrial-scale breeding, illegal pet imports and other forms of exploitation and abuse. 
              </li>
              <li>
              We are proud supporters of #AdoptDontShop.
              </li>
            </ul>
          </div>
        </div>
        <div className="why-choose-us">
          <div className="icon">
            <img src={assets.stars} />
          </div>
          <div className="details">
            <ul>
              <h2>Responsible Rehoming</h2>
              <li>We are champions of rehoming, but not at any cost.</li>
              <li>
              We believe in finding the right match between adopters and pets, not taking risks or rushing.  
              </li>
              <li>
              We always prioritise pet welfare. And we offer a safer, more ethical and professional alternative to online marketplaces like Preloved, Pets4Homes, Facebook and Gumtree. 
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

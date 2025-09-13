import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header-container">
      <div className="header">
        <h1>Find your furever friend</h1>
        <div className="btn-wrapper">
          <Link to="/petcatalog">
            <div className="act-button">
              <img src={assets.search} />
              <div className="button-text">
                <h2>I want to adopt a pet</h2>
                <p>Search the available pets listed on Caring Paws</p>
              </div>
            </div>
          </Link>
        </div>

        <div className="btn-wrapper">
          <Link to="/post-pet">
            <div className="act-button">
              <img src={assets.home} />
              <div className="button-text">
                <h2>I need to rehome my pet</h2>
                <p>
                  Start the process. It's free to list your pet on Caring Paws
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

/* <span className="search-icon">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              size="4x"
              
            />
            </span> */

//         <div className="header">
//   <div className="header-content">
//     <h1>Find your furever friend</h1>
//     <div className="btn-container">
//       <a href=""></a>
//       <button className="cta-button">
//
//       </button>
//       <div className="button-text">
//         <h4>I want to adopt a pet</h4>
//       </div>
//       <button className="cta-button">I want to rehome my pet</button>
//     </div>
//   </div>
// </div>

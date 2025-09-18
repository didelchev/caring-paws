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


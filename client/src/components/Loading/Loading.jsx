import React, { useState, useEffect } from "react";
import "./Loading.css";

export default function Loading() {
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowWarning(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="loading-container">
      <div className="loading-inner">
        <div className="lds-roller">
          <div></div><div></div><div></div><div></div>
          <div></div><div></div><div></div><div></div>
        </div>

        <div className={`loading-message ${showWarning ? "loading-message--visible" : ""}`}>
          <p className="loading-message-title">Waking up the server...</p>
          <p className="loading-message-body">
            The backend is hosted on a free tier and may take up to 30 seconds
            to start. Thanks for your patience!
          </p>
          <div className="loading-progress">
            <div className="loading-progress-bar" />
          </div>
        </div>
      </div>
    </div>
  );
}
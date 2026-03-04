import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useLogin } from "../../hooks/useAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faPaw } from "@fortawesome/free-solid-svg-icons";
import "./Login.css";

const initialValues = { email: "", password: "" };

export default function LoginForm() {
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const login = useLogin();
  const navigate = useNavigate();

  const loginHandler = async ({ email, password }) => {
    setError("");
    try {
      await login(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  const { values, changeHandler, submitHandler } = useForm(initialValues, loginHandler);

  return (
    <div className="auth-page">

      {/* Left panel */}
      <div className="auth-left">
        <div className="auth-left-inner">
          <div className="auth-brand">
            <FontAwesomeIcon icon={faPaw} />
            <span>Caring Paws</span>
          </div>
          <h1 className="auth-headline">
            Welcome<br />back
          </h1>
          <p className="auth-subline">
            Log in to manage your listings, save favourite pets, and connect with adopters across the country.
          </p>
          <div className="auth-perks">
            <div className="auth-perk">✓ View your listed pets</div>
            <div className="auth-perk">✓ Access your saved favourites</div>
            <div className="auth-perk">✓ Post new pets for adoption</div>
          </div>
        </div>
      </div>

      {/* Right panel */}
      <div className="auth-right">
        <div className="auth-card">

          <div className="auth-card-header">
            <h2>Sign in</h2>
            <p>Don't have an account? <Link to="/register">Register for free</Link></p>
          </div>

          <form className="auth-form" onSubmit={submitHandler}>

            <div className="auth-field">
              <label htmlFor="email">
                <FontAwesomeIcon icon={faEnvelope} /> Email address
              </label>
              <input
                id="email" name="email" type="email"
                placeholder="you@example.com"
                value={values.email} onChange={changeHandler} required
              />
            </div>

            <div className="auth-field">
              <label htmlFor="password">
                <FontAwesomeIcon icon={faLock} /> Password
              </label>
              <div className="auth-input-wrap">
                <input
                  id="password" name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={values.password} onChange={changeHandler} required
                />
                <button
                  type="button"
                  className="auth-eye"
                  onClick={() => setShowPassword(v => !v)}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {error && <p className="auth-error">{error}</p>}

            <button type="submit" className="auth-btn-submit">
              Sign in
            </button>

            <div className="auth-footer-link">
              <a href="#">Forgot your password?</a>
            </div>

          </form>
        </div>
      </div>

    </div>
  );
}
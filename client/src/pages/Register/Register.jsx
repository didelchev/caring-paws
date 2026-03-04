import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useRegister } from "../../hooks/useAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faUser, faPaw } from "@fortawesome/free-solid-svg-icons";
import "./Register.css";

const initialValues = { username: "", email: "", password: "", "confirm-password": "" };

export default function RegisterForm() {
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const register = useRegister();
  const navigate = useNavigate();

  const registerHandler = async (values) => {
    if (values.password !== values["confirm-password"]) {
      return setError("Passwords don't match");
    }
    setError("");
    try {
      await register(values.username, values.email, values.password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  const { values, changeHandler, submitHandler } = useForm(initialValues, registerHandler);

  const passwordStrength = () => {
    const p = values.password;
    if (!p) return null;
    if (p.length < 6) return { label: "Too short", color: "#e74c3c", width: "25%" };
    if (p.length < 8) return { label: "Weak", color: "#f39c12", width: "50%" };
    if (!/[0-9]/.test(p) || !/[A-Z]/.test(p)) return { label: "Fair", color: "#f1c40f", width: "70%" };
    return { label: "Strong", color: "#1db750", width: "100%" };
  };

  const strength = passwordStrength();

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
            Join the<br />community
          </h1>
          <p className="auth-subline">
            Create a free account and start helping pets find loving homes. It only takes a minute.
          </p>
          <div className="auth-perks">
            <div className="auth-perk">✓ List pets for adoption for free</div>
            <div className="auth-perk">✓ Save your favourite dogs</div>
            <div className="auth-perk">✓ Manage everything from your dashboard</div>
          </div>
        </div>
      </div>

      {/* Right panel */}
      <div className="auth-right">
        <div className="auth-card">

          <div className="auth-card-header">
            <h2>Create account</h2>
            <p>Already have an account? <Link to="/login">Sign in</Link></p>
          </div>

          <form className="auth-form" onSubmit={submitHandler}>

            <div className="auth-field">
              <label htmlFor="username">
                <FontAwesomeIcon icon={faUser} /> Username
              </label>
              <input
                id="username" name="username" type="text"
                placeholder="e.g. johndoe"
                value={values.username} onChange={changeHandler} required
              />
            </div>

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

            <div className="auth-divider" />

            <div className="auth-field">
              <label htmlFor="password">
                <FontAwesomeIcon icon={faLock} /> Password
              </label>
              <div className="auth-input-wrap">
                <input
                  id="password" name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="At least 6 characters"
                  value={values.password} onChange={changeHandler} required
                />
                <button type="button" className="auth-eye" onClick={() => setShowPassword(v => !v)}>
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              {strength && (
                <div className="password-strength">
                  <div className="strength-bar">
                    <div className="strength-fill" style={{ width: strength.width, background: strength.color }} />
                  </div>
                  <span className="strength-label" style={{ color: strength.color }}>{strength.label}</span>
                </div>
              )}
            </div>

            <div className="auth-field">
              <label htmlFor="confirm-password">
                <FontAwesomeIcon icon={faLock} /> Confirm Password
              </label>
              <div className="auth-input-wrap">
                <input
                  id="confirm-password" name="confirm-password"
                  type={showConfirm ? "text" : "password"}
                  placeholder="Re-enter your password"
                  value={values["confirm-password"]} onChange={changeHandler} required
                />
                <button type="button" className="auth-eye" onClick={() => setShowConfirm(v => !v)}>
                  {showConfirm ? "Hide" : "Show"}
                </button>
              </div>
              {values["confirm-password"] && values.password !== values["confirm-password"] && (
                <span className="field-hint error">Passwords don't match</span>
              )}
              {values["confirm-password"] && values.password === values["confirm-password"] && (
                <span className="field-hint success">Passwords match</span>
              )}
            </div>

            {error && <p className="auth-error">{error}</p>}

            <button type="submit" className="auth-btn-submit">
              Create account
            </button>

            <p className="auth-terms">
              By registering you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
            </p>

          </form>
        </div>
      </div>

    </div>
  );
}
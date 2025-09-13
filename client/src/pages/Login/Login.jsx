import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { login } from "../../api/auth-api";
import { useLogin } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const initialValues = { email: "", password: "" };

const LoginForm = () => {
  const login = useLogin();

  const navigate = useNavigate();

  const loginHandler = async ({ email, password }) => {
    try {
      await login(email, password);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  const { values, changeHandler, submitHandler } = useForm(
    initialValues,
    loginHandler
  );

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={submitHandler}>
          <div className="input-group">
            <label htmlFor="email">
              <i className="fas fa-envelope"></i> Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={values.email}
              onChange={changeHandler}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">
              <i className="fas fa-lock"></i> Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={values.password}
              onChange={changeHandler}
              required
            />
          </div>
          <div className="remember-me">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>
          <button type="submit">Login</button>
          <div className="form-footer">
            <a href="#">Forgot Password?</a>
            <Link to="/register">Register</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;

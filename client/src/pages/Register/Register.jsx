import React, { useState } from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import { useRegister } from "../../hooks/useAuth";
import { useForm } from "../../hooks/useForm";

const initialValues = { username: "", email: "", password: "", 'confirm-password': '' };

const RegisterForm = () => {      
  const [error, setError] = useState('')
  const register = useRegister();
  const navigate = useNavigate();

  const registerHandler = async (values) => {
    if(values.password !== values['confirm-password']){
       return setError('Password missmatch')
    }
    try {
      await register(values.username, values.email, values.password);

      navigate("/");
    } catch (error) {
      setError(error.message)
    }
  };
  const { changeHandler, submitHandler, values } = useForm(
    initialValues,
    registerHandler
  );

  return (
    <div className="register-container">
      <div className="register-form">
        <h2>Register</h2>
        <form onSubmit={submitHandler}>
          <div className="input-group">
            <label htmlFor="username">
              <i className="fas fa-user"></i> Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={values.username}
              onChange={changeHandler}
              placeholder="Enter your name"
              required
            />
          </div>
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
            <label htmlFor="register-password">
              <i className="fas fa-lock"></i> Password
            </label>
            <input
              type="password"
              id="register-password"
              name="password"
              value={values.password}
              onChange={changeHandler}
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="confirm-password">
              <i className="fas fa-lock"></i> Confirm Password
            </label>
            <input
              type="password"
              name="confirm-password"
              value={values['confirm-password']}
              onChange={changeHandler}
              id="confirm-password"
              placeholder="Confirm your password"
              required
            />
          </div>  
          {error &&  (
            <p className="error-msg">
            <span>{error}</span>
          </p>
          )}
          <button type="submit">Register</button>
          <div className="form-footer">
            <Link to="/login">Already have an account? Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;

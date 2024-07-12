import React from "react";
import "./CSS/Login.css";
import image from "../Components/Assets/ss2.png"; // Ensure the path to your image is correct

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-form">
        <div className="logo">LOGO</div>
        <h1>Welcome back!</h1>
        <p>The faster you fill up, the faster you get a ticket</p>
        <form>
          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" />
          </div>
          <div className="options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#forgot">Forgot Password</a>
          </div>
          <button className="signin-btn" type="submit">
            Sign In
          </button>
          <button className="google-signin-btn" type="button">
            Sign In with Google
          </button>
        </form>
        <p className="signup-link">
          Don't have an account? <a href="#signup">Sign up</a>
        </p>
      </div>
      <div className="login-image">
        <img src={image} alt="Login Visual" />
      </div>
    </div>
  );
};

export default Login;

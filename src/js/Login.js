import '../css/Login.css';
import React from 'react'
import { Link } from "react-router-dom";

const login = () => {
  return (
    <div class="login-page">
      <div class="login-container">
        <form class="login-form">
          <div class="username-info">
            <label for="username">
              <input
                id="username"
                type="text"
                placeholder="Username"
                required
              />
            </label>
          </div>
          <div class="password-info">
            <label for="password">
              <input
                id="password"
                type="password"
                placeholder="Password"
                required
              />
            </label>
          </div>
          <div class="login-btn">Login</div>
          {/* <a class="forgot-text">Forgot password?</a> */}
        </form>
      </div>

      <div class="sign-up-container">
        <div class="new-user">
          First time here?<Link to="/register">Sign up</Link>
        </div>
      </div>
    </div>
  )
}

export default login;
import '../css/Login.css';
import React from 'react'
import { Link  } from "react-router-dom";

const Login = () => {

  const check = () => {
    var id = localStorage.getItem('id');
    var pwd = localStorage.getItem('pwd');
    var fname = localStorage.getItem('fName');
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    console.log(id)
    console.log(pwd)
    console.log(username)
    console.log(password)
    console.log(username === id)
    console.log(pwd === password)

    if (username === id && pwd === password) {
      window.location = '/dashboard';
      alert("welcome " + fname +" to the Student Portal");
    } else {
      alert("Username or password is incorrect!");
    }
  };


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
          <div class="login-btn" onClick={check}>Login</div>
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

export default Login;
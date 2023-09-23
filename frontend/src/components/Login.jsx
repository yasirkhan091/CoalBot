import React from 'react'
import "./Login.css"

export default function Login() {
  return (
    <>
  <meta charSet="UTF-8" />
  <title>CoalBot Crushers LOGIN PAGE AND REGISTRATION PAGE </title>
  <link rel="stylesheet" href="style.css" />
  {/*-we had linked our css file---*/}
  <div className="full-page">
    <div className="navbar">
      <div>
        <a href="website.html">CoalBot Crusher</a>
      </div>
      <nav>
        <ul id="MenuItems">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <button
              className="loginbtn"
              onclick="document.getElementById('login-form').style.display='block'"
              style={{ width: "auto" }}
            >
              Login
            </button>
          </li>
        </ul>
      </nav>
    </div>
    <div id="login-form" className="login-page">
      <div className="form-box">
        <div className="button-box">
          <div id="btn" />
          <button type="button" onclick="login()" className="toggle-btn">
            Log In
          </button>
          <button type="button" onclick="register()" className="toggle-btn">
            Register
          </button>
        </div>
        <form id="login" className="input-group-login">
          <input
            type="text"
            className="input-field"
            placeholder="Email Id"
            required=""
          />
          <input
            type="password"
            className="input-field"
            placeholder="Enter Password"
            required=""
          />
          <input type="checkbox" className="check-box" />
          <span>Remember Password</span>
          <button type="submit" className="submit-btn">
            Log in
          </button>
        </form>
        <form id="register" className="input-group-register">
          <input
            type="text"
            className="input-field"
            placeholder="First Name"
            required=""
          />
          <input
            type="text"
            className="input-field"
            placeholder="Last Name "
            required=""
          />
          <input
            type="email"
            className="input-field"
            placeholder="Email Id"
            required=""
          />
          <input
            type="password"
            className="input-field"
            placeholder="Enter Password"
            required=""
          />
          <input
            type="password"
            className="input-field"
            placeholder="Confirm Password"
            required=""
          />
          <input type="checkbox" className="check-box" />
          <span>I agree to the terms and conditions</span>
          <button type="submit" className="submit-btn">
            Register
          </button>
        </form>
      </div>
    </div>
  </div>
</>

  )
}





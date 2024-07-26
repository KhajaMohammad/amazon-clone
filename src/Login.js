import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    console.log("event target ", e);
    console.log("event target ", e.target);
    console.log("event type ", e.type);
    e.preventDefault();
  };
  const register =(e)=>{
    e.preventDefault(); 
  }
  return (
    <>
      <div className="login">
        <Link to="/">
          <img
            className="login_logo"
            src="https://freelogopng.com/images/all_img/1688364239amazon-logo-black.png"
          />
        </Link>
        <div className="login_container">
          <h2>Sign-In</h2>
          <form>
            <h5>Email</h5>
            <input
              type="text"
              value={email}
              placeholder="Enter Your Email"
              onChange={(e) => {
                console.log("email event ", e);
                setEmail(e.target.value);
              }}
            />
            <h5>Password</h5>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <button
              onClick={signIn}
              type="submit"
              className="login_signIn_button"
            >
              Sign In
            </button>
          </form>
          <p>
            By continuing, you agree to Amazon's Conditions of Use and Privacy
            Notice.
          </p>
          <button className="login_createAccount_button">
            Create your Amazon Account
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;

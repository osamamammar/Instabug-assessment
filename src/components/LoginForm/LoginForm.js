import React from "react";
import { Link } from "react-router-dom";
import { InstabugLogo } from "../../assets";
import "./LoginForm.scss";

const LoginForm = () => {
  return (
    <>
      <header className="instabug-intro-container">
        <img
          src={InstabugLogo}
          alt="instabug-logo"
          width={48}
          height={48}
          title="instabug"
        />
        <h2>Log in to Instabug</h2>
      </header>

      <form className="form-container">
        <div className="anchors-container">
          <Link className="google" to={"/"}>
            Google
          </Link>
          <Link className="github" to={"/"}>
            GitHub
          </Link>
          <Link className="microsoft" to={"/"}>
            Microsoft
          </Link>
        </div>

        <div className="or-seperator">
          <span>OR</span>
        </div>

        <div className="input-container">
          <label htmlFor="email">Work Email</label>
          <input
            type="email"
            placeholder="you@company.com"
            className="email-input"
            name="email"
            id="email"
            required
          />
        </div>

        <div className="password-label-header">
          <label htmlFor="password">Password</label>
          <Link to={"/"} className="forgot-password-link">
            Forgot password?
          </Link>
        </div>

        <div className="input-container">
          <input
            type="password"
            placeholder="8+ Characters"
            name="password"
            id="password"
            className="password-input"
            required
          />
        </div>

        <button className="button-login" type="submit">
          Log in
        </button>

        <div className="footer-form">
          <p>
            Don't have an account?{" "}
            <Link className="style-link" to={"/"}>
              Sign up
            </Link>
          </p>
          <Link to={"/"} className="style-link">
            Login via SSO
          </Link>
        </div>
      </form>
      <div></div>
    </>
  );
};

export default LoginForm;

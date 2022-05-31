import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { InstabugLogo } from "../../assets";
import { UsersAccounts } from "../../Auth";
import { regexEmail, regexPassword, validateForm } from "../../utils";
import MessageAlert from "../MessageAlert/MessageAlert";
import "./LoginForm.scss";

const LoginForm = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({ email: "", password: "" });
  const [errorValidate, setErrorValidate] = useState({});
  const [Alert, setAlert] = useState("");
  const [focusedEmail, setFocusedEmail] = useState(false);
  const [focusedPassword, setFocusedPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    Object.values(UsersAccounts).forEach((value) =>
      value.email === formValues.email && value.password === formValues.password
        ? navigate("/welcome")
        : setAlert("Your email and/or password are incorrect")
    );
  };

  useEffect(() => {
    setErrorValidate(validateForm(formValues));
  }, [formValues]);

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

      <form className="form-container" noValidate>
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

        {Alert && <MessageAlert>{Alert}</MessageAlert>}

        <div className="input-container">
          <label htmlFor="email">Work Email</label>
          <input
            type="email"
            placeholder="you@company.com"
            className="email-input"
            name="email"
            id="email"
            required
            value={formValues.email}
            onChange={handleChange}
            onBlur={() => setFocusedEmail(true)}
            focused={focusedEmail.toString()}
            style={{
              borderColor: focusedEmail && errorValidate.email ? "red" : "",
              boxShadow: "none",
            }}
          />

          {focusedEmail && (
            <p className="error-message">{errorValidate.email}</p>
          )}
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
            placeholder="6+ Characters"
            name="password"
            id="password"
            className="password-input"
            required
            value={formValues.password}
            onChange={handleChange}
            onBlur={() => setFocusedPassword(true)}
            focused={focusedPassword.toString()}
            style={{
              borderColor:
                focusedPassword && errorValidate.password ? "red" : "",
              boxShadow: "none",
            }}
          />
          {focusedPassword && (
            <p className="error-message">{errorValidate.password}</p>
          )}
        </div>

        <button
          className="button-login"
          type="submit"
          disabled={
            !regexEmail.test(formValues.email) ||
            !regexPassword.test(formValues.password)
          }
          onClick={handleLogin}
        >
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

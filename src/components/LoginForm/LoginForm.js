import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { InstabugLogo } from "../../assets";
import { UsersAccounts } from "../../Auth";
import { regexEmail, regexPassword, validateForm } from "../../utils";
import LoginMethods from "../LoginMethods/LoginMethods";
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
    const { email, password } = formValues;
    const userExist = UsersAccounts.find(
      (value) => value.email === email && value.password === password
    );

    if (userExist) {
      localStorage.setItem("userInfo", JSON.stringify(email));
      navigate("/welcome");
    } else {
      setAlert("Your email and/or password are incorrect");
    }
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

      <form className="form-container">
        <LoginMethods />

        <div className="or-separator">
          <span>OR</span>
        </div>

        {Alert && <MessageAlert>{Alert}</MessageAlert>}
        <div className="input-container">
          <label htmlFor="email">Work Email</label>
          <input
            type="email"
            placeholder="you@company.com"
            className={`email-input ${
              focusedEmail && errorValidate.email ? "error-input" : ""
            }`}
            name="email"
            id="email"
            required
            value={formValues.email}
            onChange={handleChange}
            onBlur={() => setFocusedEmail(true)}
            focused={focusedEmail.toString()}
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
            className={`password-input ${
              focusedPassword && errorValidate.password && "error-input"
            }`}
            required
            value={formValues.password}
            onChange={handleChange}
            onBlur={() => setFocusedPassword(true)}
            focused={focusedPassword.toString()}
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
    </>
  );
};

export default LoginForm;

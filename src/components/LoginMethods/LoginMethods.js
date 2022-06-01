import React from "react";
import { Link } from "react-router-dom";
import { GithubIcon, GoogleIcon, MicrosoftIcon } from "../../assets";
import "./LoginMethods.scss";

const LoginMethods = () => {
  return (
    <ul className="anchors-container">
      <li>
        <Link className="google" to={"/"}>
          <img
            className="google-img"
            src={GoogleIcon}
            alt="google-icon"
            width={35}
            height={35}
          />
          <span>Google</span>
        </Link>
      </li>

      <li>
        <Link className="github" to={"/"}>
          <img
            className="github-img"
            src={GithubIcon}
            alt="github-icon"
            width={24}
            height={24}
          />
          <span>GitHub</span>
        </Link>
      </li>

      <li>
        <Link className="microsoft" to={"/"}>
          <img
            className="microsoft-img"
            src={MicrosoftIcon}
            alt="microsoft-icon"
            width={20}
            height={20}
          />
          <span>Microsoft</span>
        </Link>
      </li>
    </ul>
  );
};

export default LoginMethods;

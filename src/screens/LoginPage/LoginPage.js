import React from "react";
import { BugReporting } from "../../assets";

import { LoginForm } from "../../components";

import "./LoginPage.scss";

const LoginPage = () => {
  return (
    <>
      <main className="main-container">
        <section className="section-left">
          <BugReporting></BugReporting>
        </section>

        <section className="section-right">
          <LoginForm></LoginForm>
        </section>
      </main>
    </>
  );
};

export default LoginPage;

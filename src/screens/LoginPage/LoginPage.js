import React from "react";
import { BugReporting } from "../../assets";

import { Header, LoginForm } from "../../components";

import "./LoginPage.scss";

const LoginPage = () => {
  return (
    <>
      <Header />
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

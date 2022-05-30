import React from "react";
import {
  BugReporting,
  ProductOverview,
  ProductsCrashReporting,
} from "../../assets";

import { Footer, Header, LoginForm } from "../../components";

import "./LoginPage.scss";

const LoginPage = () => {
  return (
    <>
      <Header />
      <main className="main-container" id="main-content">
        <section className="section-left">
          {/* <BugReporting></BugReporting> */}
          {/* <p className="img-caption">The Most Comprehensive Bug Reporting Tool for Mobile Apps</p> */}
          {/* <ProductsCrashReporting /> */}
          {/* <p className="img-caption">Secure Crash Reporting With Real-Time Alerts</p> */}
          <ProductOverview />
          <p className="img-caption">
            Accelerate Your Entire Mobile Team Workflow
          </p>
        </section>

        <section className="section-right">
          <LoginForm></LoginForm>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default LoginPage;

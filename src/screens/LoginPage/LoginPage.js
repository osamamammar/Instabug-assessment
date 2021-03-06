import React, { useEffect } from "react";
import {
  Carousel,
  Footer,
  Header,
  LoginForm,
  TopCompanies,
} from "../../components";

import "./LoginPage.scss";

const LoginPage = () => {
  useEffect(() => {
    document.title = "Login | Instabug";
  }, []);

  return (
    <>
      <Header />
      <main className="main-container" id="main-content">
        <section className="section-left">
          <Carousel></Carousel>
        </section>

        <section className="section-right">
          <LoginForm></LoginForm>
          <TopCompanies></TopCompanies>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default LoginPage;

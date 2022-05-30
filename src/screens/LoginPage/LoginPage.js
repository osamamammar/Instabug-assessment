import React from "react";
import { Carousel, Footer, Header, LoginForm } from "../../components";

import "./LoginPage.scss";

const LoginPage = () => {
  return (
    <>
      <Header />
      <main className="main-container" id="main-content">
        <Carousel></Carousel>
        <section className="section-right">
          <LoginForm></LoginForm>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default LoginPage;

import React, { useEffect } from "react";
import { NotFoundLogo } from "../../assets";
import { Footer, Header } from "../../components";
import "./NotFoundPage.scss";

const NotFoundPage = () => {
  useEffect(() => {
    document.title = "NotFound | Instabug";
  }, []);
  return (
    <>
      <Header />
      <main className="main-wrapper">
        <section className="notfound-wrapper">
          <div className="img-section">
            <img src={NotFoundLogo} alt="" />
          </div>
          <div className="content-section">
            <h2 className="content-section__title">404 - Page Not Found!</h2>
            <p className="content-section__description">
              Sorry, that page doesn't exist. What would you like to do?
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default NotFoundPage;

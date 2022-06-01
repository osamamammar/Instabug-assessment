import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Footer, Header } from "../../components";
import "./WelcomePage.scss";

const WelcomePage = () => {
  const navigate = useNavigate();
  const info = JSON.parse(localStorage.getItem("userInfo"));

  const handleBtn = (e) => {
    e.preventDefault();
    localStorage.removeItem("userInfo");
    navigate("/login");
  };
  useEffect(() => {
    document.title = "Welcome | Instabug";
  }, []);
  return (
    <>
      <Header />
      <main className="welcome-page-main">
        <section className="welcome-page-container">
          <h1>
            Welcome,
            <span className="user">{info}</span>
          </h1>
          <button className="logout-btn" onClick={handleBtn}>
            Logout
          </button>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default WelcomePage;

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { InstabugLogo } from "../../assets";
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
      <main className="welcome-page-main" id="main-content">
        <section className="welcome-page-container">
          <img src={InstabugLogo} alt="" width={80} height={50.1} />
          <h1>
            Welcome ✨<span className="user">{info}</span>
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

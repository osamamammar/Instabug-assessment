import React from "react";
import "./Header.scss";

export const Header = () => {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <header className="visually-hidden">
        <h1>Instabug</h1>
      </header>
    </>
  );
};

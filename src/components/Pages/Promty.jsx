import React from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import GptCart from "../GptCart";

function Promty() {

  return (
    <>
      <div className="page__Promty--One">
        <div className="rang">
          <Header />
        </div>
        <div className="container">
          <p className="navigation__strel">Главная - Промты - ChatGPT</p>
          <p className="name__Page">Промты</p>
          <div className="wrapper__Ai-novigation">
            <Link to="/Promty">Промты</Link>
            <Link to="/PromtyMidjourney">Обучение</Link>
          </div>
        </div>
      </div>
      <GptCart />
      <Footer />
    </>
  );
}

export default Promty;

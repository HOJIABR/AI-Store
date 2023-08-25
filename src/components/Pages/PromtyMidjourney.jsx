import React from "react";
import Header from "../Header";
import { Link } from "react-router-dom";

export default function PromtyMidjourney() {
  return (
    <>
      <div className="page__Promty--One">
        <div className="rang">
          <Header />
        </div>
        <div className="container">
          <p className="navigation__strel">Главная - Промты - Midjourney</p>
          <p className="name__Page">Промты</p>
          <div className="wrapper__Ai-novigation">
            <Link to="/Promty">Промты</Link>
            <Link to="/PromtyMidjourney">Обучение</Link>
          </div>
        </div>
      </div>
    </>
  );
}

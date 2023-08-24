import React from "react";
import Header from "../Header";
import Salom from "../GptCart";

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
            <button className="link__on--Ai">ChatGPT</button>
            <button className="link__on--Ai">Midjourney</button>
          </div>
        </div>
      </div>
      <Salom/>
    </>
  );
}

export default Promty;

import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Cartes from "../Cartes";
import hend from "../../assets/img/svg/hend.svg";

export default function Advertising() {
  return (
    <>
      <div className="page__Promty">
        <div className="rang">
          <Header />
        </div>
        <div className="container">
          <p className="navigation__strel">Главная -- Реклама</p>
          <p className="name__Page">Реклама</p>
        </div>
      </div>
      <div className="wrapper__contact">
        <div className="wrapper__inner">
          <p className="education__text">
            Если у вас есть продукт или услуга, которую можно продвигать через
            рекламу
          </p>
          <p className="education__text--end">
            Напиши нам о своём курсе и мы разместим у себя на сайте
          </p>
          <div className="wrapper__telegram--coll">
            <div className="bacgraund__telegram--inner">
              <img srcSet={hend} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* <Cartes /> */}
      <Footer />
    </>
  );
}

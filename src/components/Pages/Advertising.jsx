import React from "react";
import Header from "../Header";
import hend from "../../assets/img/svg/hend.svg";

export default function Advertising() {
  return (
    <>
      <div className="page__Promty">
        <Header />
        <div className="wrapper__bagraund--mini">
          <div className="container  neural__container ">
            {/* strelkali novigatsiya boladi iinobatga o'ling!!!! */}
            <span className="navigation__strel">Главная -- Реклама</span>
            <p>Реклама</p>
          </div>
        </div>
        <div className="wrapper__contact">
          <p className="education__text">
            Если у вас есть продукт или услуга, которую можно продвигать через
            рекламу
          </p>
          <p className="education__text--end">
            Напиши нам о своём курсе и мы разместим у себя на сайте
          </p>
          <div className="wrapper__telegram--coll">
            <div className="bacgraund__telegram--inner">
              <img src={hend} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

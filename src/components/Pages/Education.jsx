import React from "react";
import Header from "../Header";
import ReclamCarts from "../ReclamCarts"
import imgHeader from "../../assets/img/png/education__header.png";
import Footer from "../Footer"


export default function Education() {
  return (
    <>
      <div className="page__Promty">
        <Header />
        <div className="wrapper__education">
          <div className="education__top">
            <div className="wrapper__education-text">
              <p>
                Навигация в мире нейронных сетей: профессиональное обучение и
                курсы
              </p>
            </div>
            <div className="wrapper__education__img">
              <img src={imgHeader} alt="" />
            </div>
          </div>
        </div>
        <div className="wrapper__contact">
          <div className="wrapper__contact__left">
            <div className="bacgraund__sorcl">
              <p>Приглашаем авторов онлайн-курсов по работе с нейросетями</p>
            </div>
          </div>
        </div>
        <ReclamCarts/>
        <Footer/>
      </div>
    </>
  );
}

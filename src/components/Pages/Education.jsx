import React from "react";
import Header from "../Header";
import ReclamCarts from "../ReclamCarts";
import imgHeader from "../../assets/img/png/education__header.png";
import hend from "../../assets/img/svg/hend.svg";
import Footer from "../Footer";

export default function Education() {
  return (
    <>
      <div className="rang">
        <Header />
      </div>
      <div className="wrapper__education">
        <div className="education__top">
          <div className="wrapper__education-text">
            <p>
              Навигация в мире нейронных сетей: профессиональное обучение и
              курсы
            </p>
          </div>
          <div className="wrapper__education__img">
            <img srcSet={imgHeader} alt="" />
          </div>
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
      <ReclamCarts />
      <div className="wrapper__text--bottom">
        <div className="wrapper_content--education">
          <h1>Обучение работе с нейросетями</h1>
          <p>
            Нейросети становятся все более важными и широко используемыми в
            современном мире. Развитие технологий и огромный объем данных делают
            их неотъемлемой частью многих сфер. Для поддержания
            конкурентоспособности и эффективности в своей области обучение
            нейросетям становится критически важным.
            <br /> <br /> Курсы обучения нейросетям предоставляют возможность
            освоить этот ценный навык. Они позволят вам понять основные
            концепции и принципы работы искуственного интелекта, а также научат
            практическим навыкам и методам их эффективного применения. Курсы
            адаптированы для разных уровней знаний, начиная с вводных курсов и
            до более продвинутых программ для     экспертов.
            <br /> <br /> Одним из основных преимуществ курсов является их
            практическая направленность. Вы сможете работать над реальными
            проектами, решать задачи и применять полученные знания на практике.
            <br /> <br />
            Более того, обучение нейросетям расширит вашу карьеру. Навыки в этой
            области востребованы в разных отраслях и могут улучшить ваши шансы
            найти работу или повысить вашу ценность в нынешней компании.
            Развитие искусственного интеллекта и нейронных сетей продолжается, и
            знание в этой области открывает новые возможности и перспективы.
            <br /> <br /> Не упустите шанс изучить эту захватывающую область и
            стать востребованным специалистом в нейросетях.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

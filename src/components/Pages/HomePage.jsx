import React from "react";
import dropDown from "../../assets/img/svg/down-arrow.svg";
import Header from "../Header";
import Cartes from "../Cartes";
import Footer from "../Footer";

function headerSection() {
  return (
    <>
      <div className="sectionHome">
          <Header />
        <div className="container section__inf">
          <div className="section__inner">
            <h1 className="section__inf--text">Онлайн Каталог - Нейросети</h1>
            <h3 className="section__inf--content">
              Единая платформа для мощных нейросетей: Откройте мир беззграничных
              возможностей с нашим каталогом
            </h3>
          </div>
        </div>
        <div className=" container section__filter">
          <div className="filter__inner">
            <button className="btn__filter active">Всем</button>
            <button className="btn__filter">Дизайнерам</button>
            <button className="btn__filter">Разработчикам</button>
            <button className="btn__filter">Копирайтерам</button>
            <button className="btn__filter">Для бизнеса</button>
          </div>
          <button className="dropDownBnt">
            <img className="" src={dropDown} alt="" />
          </button>
        </div>

        <Cartes />
        <Footer />
      </div>
    </>
  );
}

export default headerSection;

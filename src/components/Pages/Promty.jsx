import React from "react";
import Header from "../Header";

function Promty() {
  return (
    <>
      <div className="page__Promty">
        <Header />
        <div className="wrapper__bagraund--mini">
          <div className="container  neural__container ">
            {/* strelkali novigatsiya boladi iinobatga o'ling!!!! */}
            <span className="navigation__strel">Главная -- Промты</span>
            <p>Промты</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Promty;

import React from "react";
import Header from "../Header";
import Cartes from "../Cartes";

export default function NeuralNetwork() {
  return (
    <>
      <div className="page__Promty">
        <Header />
        <div className="wrapper__bagraund--mini">
          <div className="container  neural__container ">
             {/* strelkali novigatsiya boladi iinobatga o'ling!!!! */}
            <span className="navigation__strel">Главная --Нейросетм</span>
            <p>Нейросети</p>

          </div>
        </div>
        <Cartes />
      </div>
    </>
  );
}

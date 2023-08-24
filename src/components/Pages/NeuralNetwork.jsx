import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Cartes from "../Cartes";

export default function NeuralNetwork() {
  return (
    <>
      <div className="page__Promty">
        <div className="rang">
          <Header />
        </div>
        <div className="container ">
          {/* strelkali novigatsiya boladi iinobatga o'ling!!!! */}
          <p className="navigation__strel">Главная --Нейросетм</p>
          <p className="name__Page">Нейросети</p>
        </div>
        <Cartes />
        <Footer />
      </div>
    </>
  );
}

import React, { useEffect, useState } from "react";
import dropDown from "../assets/img/svg/down-arrow-cart.svg";
import seorchIcon from "../assets/img/svg/seorchIcon.svg";
import dropDownSelect from "../assets/img/svg/down-arrow-select.svg";
import axios from "axios";
import pred from "../assets/img/png/cart.png";
const src = "http://localhost:3000/cart";

function Cartes() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    axios.get(src).then((data) => {
      setArticles(data.data);
    });
  }, []);
  return (
    <>
      <div className="section__cartes">
        <div className="cartes__inner">
          <div className="seorch__cart">
            <div className="wrapper__seorch--input">
              <input
                className="seorch__cart--input"
                type="text"
                placeholder="Поиск нейросетей"
              />
              <img src={seorchIcon} alt="" />
            </div>
            <div className="wrapper__seorch--input">
              <select className="tasks" name="tasks" id="tasks">
                <option selected className="selected" value="tasks">
                  Задачи
                </option>
                <option value="tasks">2</option>
                <option value="tasks">3</option>
              </select>
              <img src={dropDownSelect} alt="" />
            </div>
            <div className="wrapper__chekBox">
              <div className="chekBox__inner">
                <input className="cheked" type="checkbox" name="" id="" />
                <p>Бесплатно</p>
              </div>
              <div className="chekBox__inner">
                <input className="cheked" type="checkbox" name="" id="" />
                <p>Триал</p>
              </div>
            </div>
          </div>
          <p>Самые популярные нейросети</p>
          <div className="wrapper__oll--cartes">
            {articles.map((articl) => {
              return (
                <div className="carts__warpper">
                  <img src={pred} alt="" />
                  <h1 className="name__Ai">{articl.textHeader}</h1>
                  <span className="cart__context">{articl.textContent}</span>
                </div>
              );
            })}
          </div>
          <button className="show__oll--cartes">
            <img src={dropDown} alt="" />
            <p>Смотреть все</p>
            <img src={dropDown} alt="" />
          </button>
        </div>
      </div>
    </>
  );
}

export default Cartes;

// {articles.map((articl) => {
//   return (
//     <div className="carts__warpper">
//       <img src={pred} alt="" />
//       <h1 className="name__Ai">{articl.textHeader}</h1>
//       <span className="cart__context">{articl.textContent}</span>
//     </div>
//   );
// })}

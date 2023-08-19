import React from "react";
import dropDown from "../assets/img/svg/down-arrow-cart.svg";
import seorchIcon from "../assets/img/svg/seorchIcon.svg";
import dropDownSelect from "../assets/img/svg/down-arrow-select.svg";

function Cartes() {
  return (
    <>
      <div className="container section__cartes">
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

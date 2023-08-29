import { useState } from "react";
import seorchIcon from "../assets/img/svg/seorchIcon.svg";
import dropDownSelect from "../assets/img/svg/down-arrow-select.svg";
import forAdults from "../assets/img/svg/18+.svg";
const Cartes = ({ articles, loading }) => {
  
  const [searchValue, setSearchValue] = useState("");
  console.log()
  if (loading) {
    return <h2>Loading...</h2>;
  }
  const carts = articles.filter((obj) => {
    if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
      return true;
    }
    return false;
  }).map((articl, i) => {
    return (
      <div className="carts__warpper">
        <img srcSet={articl.image} alt="" />
        <h1 className="name__Ai">{articl.title}</h1>
        <span className="cart__context">{articl.description}</span>
        <div className="wrapper__bot">
          <span className="cart__bot">{articl.zadacha}</span>
          <img
            src={(articl.icon_18 = true ? forAdults : "")}
            alt=""
            srcset=""
          />
          <img
            src={(articl.icon_18 = true ? forAdults : "")}
            alt=""
            srcset=""
          />
          <img
            src={(articl.icon_18 = true ? forAdults : "")}
            alt=""
            srcset=""
          />
          <img
            src={(articl.icon_18 = true ? forAdults : "")}
            alt=""
            srcset=""
          />
          <img
            src={(articl.icon_18 = true ? forAdults : "")}
            alt=""
            srcset=""
          />
        </div>
      </div>
    );
  });
  return (
    <>
      <div className="section__cartes">
        <div className="cartes__inner">
          <div className="seorch__cart">
            <div className="wrapper__seorch--input">
              <input
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="seorch__cart--input"
                type="text"
                placeholder="Поиск нейросетей"
              />
              <img srcSet={seorchIcon} alt="" />
            </div>
            <div className="wrapper__seorch--input">
              <select className="tasks" name="tasks" id="tasks">
                <option selected className="selected" value="1">
                  Задачи
                </option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
              <img srcSet={dropDownSelect} alt="" />
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
            {carts}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cartes;

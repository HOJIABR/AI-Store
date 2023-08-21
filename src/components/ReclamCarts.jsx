import React, { useState, useEffect } from "react";
import axios from "axios";
import pred from "../assets/img/png/raketa.png";
const src = "http://localhost:3000/cartReklam";

function ReclamCarts() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    axios.get(src).then((data) => {
      setArticles(data.data);
    });
  }, []);
  return (
    <>
      <div className="wrapper__oll--cartes">
        {articles.map((articl) => {
          return (
            <div className="carts__warpper">
              <img className="img__cart" src={pred} alt="" />
              <h1 className="name__Ai">{articl.textTop}</h1>
              <span className="cart__context">{articl.textBottom}</span>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ReclamCarts;

{
  /* <div className="carts__warpper">
          <img className="img__cart" src={pred} alt="" />
          <h1 className="name__Ai">{articl.textHeader}</h1>
        </div> */
}

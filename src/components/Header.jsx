import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import logo from "../assets/img/svg/logo.svg";

function Header() {
  const [salom, setSalom] = useState(false);
  const salom1 = () => {
    setSalom(!salom);
  };
  return (
    <>
      <header>
        <div className="container header__inner">
          <nav className="menu">
            <ul className="menu__list">
              <li>
                <Link to="/neyron">Нейросети</Link>
              </li>
              <li>
                <Link to="/Promty">Промты</Link>
              </li>
              <a href="#" className="logo">
                <Link to="/">
                  <img src={logo} alt="" srcset="" />
                </Link>
              </a>
              <li>
                <Link to="/Education">Обучение</Link>
              </li>
              <li>
                <Link to="/Advertising">Реклама</Link>
              </li>
            </ul>
            <div onClick={salom1} className={`menu-btn ${salom ? "open" : ""}`}>
              <div className="menu-btn__burger"></div>
            </div>
          </nav>
        </div>
        <Outlet />
      </header>
    </>
  );
}

export default Header;

// const menuBtn = document.querySelector('.menu-btn');
// let menuOpen = false;
// menuBtn.addEventListener('click', () => {
//   if(!menuOpen) {
//     menuBtn.classList.add('open');
//     menuOpen = true;
//   } else {
//     menuBtn.classList.remove('open');
//     menuOpen = false;
//   }
// });

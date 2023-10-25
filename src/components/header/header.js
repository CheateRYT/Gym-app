import React from "react";
import { Component } from "react";
import logo from "../../img/Header-logo.png";

class Header extends Component {
  render() {
    return (
        <header className="header">
      <img src={logo} className="header__logo" alt="logo" />
          <nav className="nav">
            <ul className="nav__list">
              <li className="nav__item"><a className="nav__link" href="">Упражнения</a></li>
              <li className="nav__item"><a className="nav__link" href="">Прогрессия</a></li>
              <li className="nav__item"><a className="nav__link" href="">Профиль</a></li>
            </ul>
          </nav>
        </header>
    );
  }
}

export default Header;

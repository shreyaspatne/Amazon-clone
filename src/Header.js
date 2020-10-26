import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <NavLink to="/">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          className="header__logo"
        />
      </NavLink>
      <div className="header__search">
        <input className="header__searchinput" type="text" />
        <SearchIcon className="header__seacrhicon" />
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionlineone">Hello</span>
          <span className="header__optionlinetwo">Sign in</span>
        </div>

        <div className="header__option">
          <span className="header__optionlineone">Return</span>
          <span className="header__optionlinetwo">& orders</span>
        </div>

        <div className="header__option">
          <span className="header__optionlineone">Yours</span>
          <span className="header__optionlinetwo">Prime</span>
        </div>

        <div className="headre__optionbasket header__optionlinetwo">
          <NavLink to="/checkout">
            <ShoppingBasketIcon className="headre__optionbasket" />
          </NavLink>
          <span className="header__basketcount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;

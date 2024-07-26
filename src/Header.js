import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import ShopppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket }] = useStateValue();

  return (
    <div className="header">
      {/*logo*/}
      <Link to="/">
        <img
          className="header_logo"
          alt="Not found"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>
      {/*Header search*/}
      <div className="header_search">
        <input className="header_searchInput" type="search"></input>
        <div className="header_searchIcon">
          <SearchIcon />
          {/*Search icon  */}
        </div>
      </div>
      {/*header nav */}
      <div className="header_navbar">
        <Link to="./login">
          <div className="header_option">
            <span className="header_optionLineOne">Hello Guest</span>
            <span className="header_optionLineTwo">Sign In</span>
          </div>
        </Link>
        <div className="header_option">
          <span className="header_optionLineOne">Orders In</span>
          <span className="header_optionLineTwo">Returns</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header_optionBasket">
            <ShopppingCartIcon />
            <span className="header_optionLinetwo header_basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;

import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo/Logo-brainflix.svg";
import Search from "../assets/Icons/SVG/Icon-search.svg";
import Upload from "../assets/Icons/SVG/Icon-upload.svg";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="header__logo">
        <img className="header__logo-image" src={Logo} alt="Brainflix" />
      </Link>
      <form className="header__search">
        <input
          className="header__search-image"
          type="image"
          src={Search}
          alt="search"
        />
        <input
          className="header__search-bar"
          name="search"
          placeholder="Search"
          autoComplete="off"
        />
      </form>
      <div className="header__bot">
        <Link to="./upload">
          <button className="header__bot-upload">
            <img
              className="header__bot-upload-image"
              src={Upload}
              alt="Upload"
            />
            UPLOAD
          </button>
        </Link>
        <div className="header__bot-user"></div>
      </div>
    </div>
  );
};
export default Header;

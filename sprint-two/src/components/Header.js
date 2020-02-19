import React from "react";
import Logo from "../assets/Logo/Logo-brainflix.svg";
import Search from "../assets/Icons/SVG/Icon-search.svg";
import Upload from "../assets/Icons/SVG/Icon-upload.svg";

const Header = () => {
  return (
    <div className="header">
      <a className="header__logo" href="../../public/index.html">
        <img className="header__logo-image" src={Logo} alt="Brainflix" />
      </a>
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
        <button className="header__bot-upload">
          <img className="header__bot-upload-image" src={Upload} alt="Upload" />
          UPLOAD
        </button>
        <div className="header__bot-user"></div>
      </div>
    </div>
  );
};
export default Header;

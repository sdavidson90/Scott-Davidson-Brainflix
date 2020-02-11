import React from "react";

export default function Header() {
  return (
    <div className="header">
      <a className="header__logo" href="../../public/index.html">
        <img
          className="header__logo-image"
          src={require("../assets/Logo/Logo-brainflix.svg")}
          alt="Brainflix Logo"
        />
      </a>
      <form className="header__search">
        <input
          className="header__search-image"
          type="image"
          src={require("../assets/Icons/PNG/Icon-search.png")}
          alt="search"
        />
        <textarea
          className="header__search-bar"
          name="search"
          rows="10"
          cols="50"
          placeholder="Search"
        ></textarea>
      </form>
      <div className="header__bot">
        <button className="header__bot-upload">
          <img
            className="header__bot-upload-image"
            src={require("../assets/Icons/SVG/Icon-upload.svg")}
            alt="Upload"
          />
          UPLOAD
        </button>
        <div className="header__bot-user"></div>
      </div>
    </div>
  );
}

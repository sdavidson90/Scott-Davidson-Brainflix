import React from "react";

const Upload = () => {
  return (
    <div className="Upload">
      <h1>Upload Video</h1>
      <img src="" alt="" />
      <form>
        <p>TITLE YOUR VIDEO</p>
        <input
          className="header__search-bar"
          name="search"
          placeholder="Search"
          autoComplete="off"
        />
        <p>ADD A VIDEO DESCRIPTION</p>
        <textarea
          className="comments__input-info-form-comment"
          name="comment"
          rows="10"
          cols="50"
          placeholder="Add a new comment"
        ></textarea>
        <button className="">PUBLISH</button>
        <button className="">CANCEL</button>
      </form>
    </div>
  );
};

export default Upload;

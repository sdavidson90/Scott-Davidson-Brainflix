import React from "react";

const Videos = () => {
  return (
    <div className="video">
      <h4 className="video__next">NEXT VIDEO</h4>
      <a className="video__container">
        <img
          className="video__container-image"
          src={require("../assets/Images/video-list-1.jpg")}
          // alt={this.props.title}
        />
        <div className="video__sub">
          <h2 className="video__sub-title">
            Become A Travel Pro In One Easy Lesson…
          </h2>
          <h3 className="video__sub-name">Scotty Cranmer</h3>
        </div>
      </a>
    </div>
  );
};

export default Videos;

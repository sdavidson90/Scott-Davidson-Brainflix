import React from "react";

const Videos = ({ sideVideos }) => {
  const vidArr = sideVideos.map((object, index) => {
    return (
      <a key={index} className="video__container">
        <img
          className="video__container-image"
          src={object.image}
          alt={object.title}
        />
        <div className="video__sub">
          <h2 className="video__sub-title">{object.title}</h2>
          <h3 className="video__sub-name">{object.channel}</h3>
        </div>
      </a>
    );
  });
  return (
    <div className="video">
      <h4 className="video__next">NEXT VIDEO</h4>
      {vidArr}
    </div>
  );
};

export default Videos;

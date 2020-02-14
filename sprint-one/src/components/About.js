import React from "react";
import Views from "../assets/Icons/SVG/Icon-views.svg";
import Likes from "../assets/Icons/SVG/Icon-likes.svg";

const About = ({ mainVideoInfo }) => {
  const mainVideoArr = mainVideoInfo.map((object, index) => {
    return (
      <div key={index} className="about">
        <div className="about__border">
          <h1 className="about__title">{object.title}</h1>
          <div className="about__container">
            <div className="about__info">
              <h2 className="about__info-author">By {object.channel}</h2>
              <h4 className="about__info-date">12/18/2018</h4>
            </div>
            <div className="about__stats">
              <img src={Views} className="about__stats-view" alt="Views" />
              <h4 className="about__stats-view-count">{object.views}</h4>
              <img src={Likes} className="about__stats-likes" alt="Likes" />
              <h4 className="about__stats-likes-count">{object.likes}</h4>
            </div>
          </div>
        </div>
        <p className="about__description">{object.description}</p>
      </div>
    );
  });
  return mainVideoArr;
};

export default About;

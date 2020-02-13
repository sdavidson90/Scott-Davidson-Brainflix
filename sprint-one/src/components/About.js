import React from "react";
import Views from "../assets/Icons/SVG/Icon-views.svg";
import Likes from "../assets/Icons/SVG/Icon-likes.svg";

const About = () => {
  return (
    <div className="about">
      <div className="about__border">
        <h1 className="about__title">BMX Rampage: 2018 Highlights</h1>
        <div className="about__container">
          <div className="about__info">
            <h2 className="about__info-author">By Red Cow</h2>
            <h4 className="about__info-date">12/18/2018</h4>
          </div>
          <div className="about__stats">
            <img src={Views} className="about__stats-view" />
            <h4 className="about__stats-view-count">1,001,023</h4>
            <img src={Likes} className="about__stats-likes" />
            <h4 className="about__stats-likes-count">110,985</h4>
          </div>
        </div>
      </div>
      <p className="about__description">
        On a gusty day in Southern Utah, a group of 25 daring mountain bikers
        blew the doors off what is possible on two wheels, unleashing some of
        the biggest moments the sport has ever seen. While mother nature only
        allowed for one full run before the conditions made it impossible to
        ride, that was all that was needed for event veteran Kyle Strait, who
        won the event for the second time -- eight years after his first Red Cow
        Rampage title
      </p>
    </div>
  );
};

export default About;

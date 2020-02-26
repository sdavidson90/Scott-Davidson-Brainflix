import React from "react";
import Video from "../assets/Video/BrainStation Sample Video.mp4";
import play from "../assets/Icons/SVG/Icon-play.svg";

const Hero = props => {
  return (
    <div className="hero">
      <video className="hero__video" poster={props.hero}>
        <source src={Video} type="video/mp4" />
      </video>
      {/* <div className="hero__controls">
        <button className="hero__controls-play" type="button">
          <img src={play} />
        </button>
        <progress className="hero__controls-prog" value="0" min="0">
          <span className="hero__controls-prog-bar"></span>
        </progress>
        <button className="hero__controls-full" type="button"></button>
        <button className="hero__controls-volume" type="button"></button>
      </div> */}
    </div>
  );
};

export default Hero;

import React from "react";
import Video from "../assets/Video/BrainStation Sample Video.mp4";

const Hero = props => {
  return (
    <div className="hero">
      <video className="hero__video" controls poster={props.hero}>
        <source src={Video} type="video/mp4" />
      </video>
    </div>
  );
};

export default Hero;

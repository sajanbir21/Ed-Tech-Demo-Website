import React from "react";
import Common from "./Common";
import { NavLink } from "react-router-dom";
import ic2img from "./images/ic2.svg";

const About = () => {
  return (
    <>
      <Common
        name=" Welcome to About page"
        imgsrc={ic2img}
        visit="/contact"
        btname="Contact Now"
      />
    </>
  );
};

export default About;

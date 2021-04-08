import React from "react";
import Common from "./Common";
import { NavLink } from "react-router-dom";
import icimg from "./images/ic.svg";

const Home = () => {
  return (
    <>
      <Common
        name=" Grow your career with "
        imgsrc={icimg}
        visit="/service"
        btname="Get Started"
      />
    </>
  );
};

export default Home;

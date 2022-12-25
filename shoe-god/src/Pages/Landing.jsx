import React from "react";
import Navbar from "../Assets/Navbar.jsx";
import shiny from "../Assets/shiny.webp"
import "./Landing.css"
const Landing = () => {
  return (
    <div>
      <Navbar />
      <div className="landing-img">
      <img src={shiny} alt="man legs in yeezy"/>
      </div>
      <div className="enter">
        <button className="entrance-btn">--ENTER HEAVEN--</button>
      </div>
    </div>
   );
};

export default Landing;

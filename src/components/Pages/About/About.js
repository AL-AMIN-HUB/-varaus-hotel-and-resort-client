import React from "react";
import AboutUs from "../AboutUs/AboutUs";

const About = () => {
  return (
    <div>
      <div className="room pt-5">
        <div className="text-center pt-5">
          <h1 className="text-color">About Us</h1>
          <p className="text-color">Home / About Us</p>
        </div>
      </div>
      <div className="py-5">
        <AboutUs></AboutUs>
      </div>
    </div>
  );
};

export default About;

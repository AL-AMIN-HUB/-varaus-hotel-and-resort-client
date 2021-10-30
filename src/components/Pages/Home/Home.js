import React from "react";
import AboutUs from "../../AboutUs/AboutUs";
import Destinat from "../../Destinat/Destinat";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="mt-5">
        <AboutUs></AboutUs>
      <Services></Services>
      <Destinat></Destinat>
      </div>
    </div>
  );
};

export default Home;

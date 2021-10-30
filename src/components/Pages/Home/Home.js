import React from "react";
import AboutUs from "../../AboutUs/AboutUs";
import BlogPost from "../../BlogPost/BlogPost";
import Destinat from "../../Destinat/Destinat";
import FeedBack from "../../FeedBack/FeedBack";
import VedioPhoto from "../../VedioPhoto/VedioPhoto";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="mt-5">
        <AboutUs></AboutUs>
        <Services></Services>
        <VedioPhoto></VedioPhoto>
        <Destinat></Destinat>
        <FeedBack></FeedBack>
        <BlogPost></BlogPost>
      </div>
    </div>
  );
};

export default Home;

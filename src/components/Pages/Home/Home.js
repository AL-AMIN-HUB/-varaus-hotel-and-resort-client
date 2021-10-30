import React from "react";
import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import BlogPost from "../BlogPost/BlogPost";
import Destinat from "../Destinat/Destinat";
import FeedBack from "../FeedBack/FeedBack";
import OurFacilities from "../OurFacilities/OurFacilities";
import Services from "../Services/Services";
import VedioPhoto from "../VedioPhoto/VedioPhoto";

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
        <OurFacilities></OurFacilities>
        <BlogPost></BlogPost>
      </div>
    </div>
  );
};

export default Home;

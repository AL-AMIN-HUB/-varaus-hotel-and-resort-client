import React from "react";
import { Link } from "react-router-dom";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="py-5">
      <div className="row container mx-auto">
        <div className="col-md-6 col-12">
          <img className="img-fluid w-100" src="https://i.ibb.co/vYYPChG/about-c80f859e.png" alt="" />
        </div>
        <div className="col-md-1 col-1"></div>
        <div className="col-md-5 col-12 about">
          <p className="text-custom-color lead fw-bold">About Us</p>
          <h2 className="text-color about-text">
            A Best Place <br /> to Enjoy
          </h2>
          <p className="lead text-muted mt-5">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be
            sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators.
          </p>
          <div className="text-start mb-5">
            <Link to="/room">
              <button className="btn room-btn shadow-lg">More About Us</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

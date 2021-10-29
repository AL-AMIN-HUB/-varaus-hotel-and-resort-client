import React from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <div className="carousel-img1 "></div>
          <Carousel.Caption className="text-carousel">
            <h3 className="mb-5 text-start">
              The Varaus <br /> Hotel & Resort
            </h3>
            <p className="text-start my-5 lead ">Make Your Life Better And Bright! You Must Trip With Us!!</p>
            <div className="text-start mb-5">
              <Link to="/room">
                <button className="btn room-btn">Book A Room</button>
              </Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-img2 "></div>

          <Carousel.Caption className="text-carousel">
            <h3 className="mb-5 text-start">
              The Varaus <br /> Hotel & Resort
            </h3>
            <p className="text-start my-5 lead ">Make Your Life Better And Bright! You Must Trip With Us!!</p>
            <div className="text-start mb-5">
              <Link to="/room">
                <button className="btn room-btn">Book A Room</button>
              </Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-img3 "></div>

          <Carousel.Caption className="text-carousel">
            <h3 className="mb-5 text-start">
              The Varaus <br /> Hotel & Resort
            </h3>
            <p className="text-start my-5 lead ">Make Your Life Better And Bright! You Must Trip With Us!!</p>
            <div className="text-start mb-5">
              <Link to="/room">
                <button className="btn room-btn">Book A Room</button>
              </Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-img4 "></div>

          <Carousel.Caption className="text-carousel">
            <h3 className="mb-5 text-start">
              The Varaus <br /> Hotel & Resort
            </h3>
            <p className="text-start my-5 lead ">Make Your Life Better And Bright! You Must Trip With Us!!</p>
            <div className="text-start mb-5">
              <Link to="/room">
                <button className="btn room-btn">Book A Room</button>
              </Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;

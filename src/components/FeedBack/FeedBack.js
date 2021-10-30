import React from "react";

const FeedBack = () => {
  return (
    <div style={{ backgroundColor: "#F5FBF9" }} className="Destinat py-5 ">
      <div className="mx-auto container">
        <p className="lead fw-bold text-custom-color text-center"> What Say Clients</p>
        <h2 className="fs-1 text-color text-center">
          {" "}
          Our Clients are <br /> Important to Us
        </h2>
        <div className="row pb-5">
          <div className="col-md-4 col-12">
            <div className="pt-5 pb-2">
              <i className="fas text-warning fs-5 fa-star"></i> <i className="fas text-warning fs-5 fa-star"></i>{" "}
              <i className="fas text-warning fs-5 fa-star"></i> <i className="fas text-warning fs-5 fa-star"></i>{" "}
              <i className="fas text-warning fs-5 fa-star-half-alt"></i>
            </div>
            <p className="text-muted lead">
              "The trip was incredible. I got to see so many place I wouldn't have by myself, me and my husband really enjoyed a lot"
            </p>
            <div className="d-flex">
              <div>
                <img className="img-fluid w-100 rounded-circle" src="https://i.ibb.co/RGnQ9Nh/download-1.jpg" alt="" />
              </div>
              <div className="ms-3">
                <h4>JENEFAR MEEERA</h4>
                <p>Paris, France</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="pt-5 pb-2">
              <i className="fas text-warning fs-5 fa-star"></i> <i className="fas text-warning fs-5 fa-star"></i>{" "}
              <i className="fas text-warning fs-5 fa-star"></i> <i className="fas text-warning fs-5 fa-star"></i>{" "}
              <i className="fas text-warning fs-5 fa-star"></i>
            </div>
            <p className="text-muted lead">
              "The trip was incredible. I got to see so many place I wouldn't have by myself, me and my husband really enjoyed a lot"
            </p>
            <div className="d-flex">
              <div>
                <img className="img-fluid w-100 rounded-circle" src="https://i.ibb.co/c8cJXr1/download.jpg" alt="" />
              </div>
              <div className="ms-3">
                <h4>LILY MONALISA</h4>
                <p>Singapore</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="pt-5 pb-2">
              <i className="fas text-warning fs-5 fa-star"></i> <i className="fas text-warning fs-5 fa-star"></i>{" "}
              <i className="fas text-warning fs-5 fa-star"></i> <i className="fas text-warning fs-5 fa-star"></i>{" "}
              <i className="far text-warning fs-5 fa-star"></i>
            </div>
            <p className="text-muted lead">
              "The trip was incredible. I got to see so many place I wouldn't have by myself, me and my husband really enjoyed a lot"
            </p>
            <div className="d-flex">
              <div>
                <img className="img-fluid w-100 rounded-circle" src="https://i.ibb.co/wYJNCrW/download-2.jpg" alt="" />
              </div>
              <div className="ms-3">
                <h4>BUNJIR WALTON</h4>
                <p>Takao, Japan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedBack;

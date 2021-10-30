import React from "react";
import { Link } from "react-router-dom";
import "./OurFacilities.css";

const OurFacilities = () => {
  return (
    <div className="row pb-5 mb-5">
      <div className="col-md-4 p-0">
        <div className="facilities">
          <div className="img-text">
            <img className="img-fluid w-100 " src="https://i.ibb.co/sQ6pM3g/1-075bfea6.jpg" alt="" />
            <div className="btn-facilities mb-5">
              <Link to="/room">
                <button className="btn room-btn">Delicious Food</button>
              </Link>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="col-md-4 p-0">
        <div className="facilities">
          <div className="img-text">
            <img className="img-fluid w-100 " src="https://i.ibb.co/hYPMcbC/2-785ff68e.jpg" alt="" />
            <div className="btn-facilities mb-5">
              <Link to="/room">
                <button className="btn room-btn">Swimming Pool</button>
              </Link>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="col-md-4 p-0">
        <div className="facilities">
          <div className="img-text">
            <img className="img-fluid w-100 " src="https://i.ibb.co/xL9xx9V/3-9ad89d34.jpg" alt="" />
            <div className="btn-facilities mb-5">
              <Link to="/room">
                <button className="btn room-btn">Spa Salon</button>
              </Link>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="col-md-4 p-0">
        <div className="facilities">
          <div className="img-text">
            <img className="img-fluid w-100 " src="https://i.ibb.co/GsSpQ7B/4-c250082b.jpg" alt="" />
            <div className="btn-facilities mb-5">
              <Link to="/room">
                <button className="btn room-btn">Game Room</button>
              </Link>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="col-md-4 p-0">
        <div className="facilities">
          <div className="img-text">
            <img className="img-fluid w-100 " src="https://i.ibb.co/bRZjrQw/5-d3771369.jpg" alt="" />
            <div className="btn-facilities mb-5">
              <Link to="/room">
                <button className="btn room-btn">Airport Taxi</button>
              </Link>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="col-md-4 p-0">
        <div className="facilities">
          <div className="img-text">
            <img className="img-fluid w-100 " src="https://i.ibb.co/99h1FgL/slider4.jpg" alt="" />
            <div className="btn-facilities mb-5">
              <Link to="/room">
                <button className="btn room-btn">Breakfast</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurFacilities;

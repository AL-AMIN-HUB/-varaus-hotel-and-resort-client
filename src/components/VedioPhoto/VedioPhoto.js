import React from "react";
import "./VedioPhoto.css";

const VedioPhoto = () => {
  return (
    <div className="p-5">
      <div className="video">
        <a className="text-decoration-none" href="https://www.youtube.com/watch?v=5bL1dEKYyak" target="blank">
          {" "}
          <i className="fas icon-vedio fa-play"></i>
        </a>
      </div>
    </div>
  );
};

export default VedioPhoto;

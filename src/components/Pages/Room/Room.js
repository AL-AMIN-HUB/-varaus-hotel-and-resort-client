import React from "react";
import Services from "../Services/Services";

import "./Room.css";

const Room = () => {
  return (
    <div>
      <div className="room pt-5">
        <div className="text-center pt-5">
          <h1 className="text-color">Room Service</h1>
          <p className="text-color">Home / Room Service</p>
        </div>
      </div>
      <div className="py-5">
        <Services></Services>
      </div>
    </div>
  );
};

export default Room;

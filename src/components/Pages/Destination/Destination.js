import React from "react";
import Destinat from "../../Destinat/Destinat";

const Destination = () => {
  return (
    <div>
      <div className="room pt-5">
        <div className="text-center pt-5">
          <h1 className="text-color">Destination</h1>
          <p className="text-color">Home / Destination</p>
        </div>
      </div>
      <div className="pb-5">
        <Destinat></Destinat>
      </div>
    </div>
  );
};

export default Destination;

import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="text-center container mx-auto">
      <div className="py-5">
        <img className="img-fluid d-block mx-auto" src="http://varaus-react.wpocean.com/static/media/error-404.cc21385c.png" alt="" />
      </div>
      <h2>Oops! Page Not Found!</h2>
      <p className="lead">
        We’re sorry but we can’t seem to find the page you requested. This might be because you <br /> have typed the web address incorrectly.
      </p>
      <Link to="/home">
        {" "}
        <button className="btn bg-custom-color text-white py-3 px-4 fs-4">Back To Home</button>
      </Link>
    </div>
  );
};

export default Error;

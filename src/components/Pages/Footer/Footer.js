import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer-bg px-5 pt-5 text-white ">
        <div className="container mx-auto footer-div">
          <div>
            <img style={{ width: "150px" }} src="https://i.ibb.co/m8tRCCr/download.png" alt="" />
          </div>
          <div>
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-google"></i>
          </div>
        </div>
        <hr />
        <div className="row container mx-auto pt-5 mt-5">
          <div className="col-md-3 col-12 text-start mb-5 mb-md-0">
            <h3 className="fw-bold">Contact</h3>
            <p>online store with lots of cool and exclusive features</p>
            <div className="d-flex text-start">
              <div>
                <i className="fas fs-4 mt-1 me-3 fa-map-marker-alt"></i>
              </div>
              <div>
                <p className="lead"> Khulna City, Bangladesh</p>
              </div>
            </div>{" "}
            <div className="d-flex  text-start">
              <div>
                <i className="fas fs-4 mt-1 me-3 fa-mobile-alt"></i>
              </div>
              <div>
                <p className="lead"> +8801906221552</p>
              </div>
            </div>{" "}
            <div className=" text-start d-flex">
              <div>
                <i className=" fs-5 mt-1 me-3  far fa-envelope"></i>
              </div>
              <div>
                <p className="lead"> alaminsbl502@gmail.com</p>
              </div>
            </div>
          </div>
          {/*

         */}

          <div className="col-md-3 col-12 text-start mb-5 mb-md-0">
            <h3 className="fw-bold">Destination</h3>
            <div className="d-flex text-start">
              <div>
                <img className="my-2 me-3" src="https://i.ibb.co/1LYmJBS/download-1.jpg" alt="" />
              </div>
              <div>
                Paris, France <br /> 30 Oct 21 - 12 Nov 21 <br /> <span className="text-custom-color fw-bold fs-5">$680</span>
              </div>
            </div>{" "}
            <div className="d-flex  text-start">
              <div>
                <img className="my-2 me-3" src="https://i.ibb.co/ZBY70J6/download.jpg" alt="" />
              </div>
              <div>
                Singapore <br /> 30 Oct 21 - 12 Nov 21 <br /> <span className="text-custom-color fw-bold fs-5">$699</span>
              </div>
            </div>{" "}
          </div>

          {/*  */}
          <div className="col-md-3 col-12 text-start footer-li mb-5 mb-md-0">
            <h3 className="fw-bold">Useful Links</h3>
            <li>About Us</li>
            <li>Our Offers</li>
            <li>How Spread</li>
            <li>Contact Us</li>
            <li>Our Event</li>
          </div>
          {/*  */}
          <div className="col-md-3 col-12 text-start  mb-5 mb-md-0">
            <h3 className="fw-bold">Newsletter</h3>

            <input style={{ borderColor: "white" }} placeholder="Email*" className="bg-transparent w-100 text-white border-1 p-3 my-3" type="email" />
            <input type="submit" className="w-100 py-2 px-3 bg-custom-color border-0 shadow fs-5 text-white" value="SUBSCRIBE" />
          </div>
        </div>
      </div>
      {/*  */}
      <div className=" footer-div copyright-text pt-3 text-white px-5">
        <div>
          <p>
            {" "}
            <span className="me-2"> Privacy Policy</span>
            <span className="me-2"> Terms & Condition</span>
            <span> Cookies</span>{" "}
          </p>
        </div>
        <div>
          <p className="lead">&copy; 2021 Varaus. All rights reserved by Al Amin</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

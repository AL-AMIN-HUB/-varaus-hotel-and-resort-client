import React from "react";
import ContactUs from "../ContactUs/ContactUs";

const Contact = () => {
  return (
    <div>
      <div className="contact py-5">
        <div className="text-center pt-5">
          <h1 className="text-white fw-bold">Contact Us</h1>
          <p className="text-white">Home / Contact</p>
        </div>
      </div>
      <div>
        <ContactUs></ContactUs>
      </div>
    </div>
  );
};

export default Contact;

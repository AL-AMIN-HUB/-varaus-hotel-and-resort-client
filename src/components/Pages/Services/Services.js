import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Row, Spinner, Button } from "react-bootstrap";
import Service from "../Service/Service";

const Services = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [services, setServices] = useState([]);

  //

  useEffect(() => {
    fetch("https://stormy-basin-87659.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(true);
        setServices(data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [setIsLoading]);
  if (isLoading) {
    return (
      <div className="text-center my-5">
        <Button variant="primary" disabled>
          <Spinner animation="border" variant="danger" />
          <span className="ms-2 fs-2"> Loading...</span>
        </Button>
      </div>
    );
  }
  return (
    <div className="my-5 pb-5">
      <div className="text-center">
        <p className="text-custom-color">Our Main Room Services</p>
        <h2 style={{ fontSize: "3rem", marginBottom: "4rem" }} className="text-color">
          Discover Our Rooms
        </h2>
      </div>

      <Row xs={1} sm={1} md={3} className="g-4 row container mx-auto">
        {services.map((service) => (
          <Service key={service.key} service={service}></Service>
        ))}
      </Row>
    </div>
  );
};

export default Services;

import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = (props) => {
  const { name, desc, img, price, shift, subName } = props.service;
  return (
    <div>
      <Col>
        <Card className="border-0 shadow">
          <div className="parent-card">
            <Card.Img variant="top" src={img} />
            <div className="child-card">
              <Card.Body>
                <Card.Title className="text-color" style={{ fontSize: "24px" }}>
                  {name}
                </Card.Title>
                <Card.Title>
                  <small className="text-muted">{subName}</small>
                </Card.Title>
                <Card.Text className="lead text-start">{desc}</Card.Text>{" "}
                <Card.Text className="text-start">
                  Price: <span className="fs-5 fw-bold">${price}</span> / Per <span>{shift}</span>
                </Card.Text>
                <Link to="/orderPlace">
                  <Button className="bg-custom-color border-0 py-2 px-3 fs-5">Booking Now</Button>
                </Link>
              </Card.Body>
            </div>
            <div className="second-name p-3">
              <Card.Title className="text-color" style={{ fontSize: "24px" }}>
                {name}
              </Card.Title>
            </div>
          </div>
        </Card>
      </Col>
    </div>
  );
};

export default Service;

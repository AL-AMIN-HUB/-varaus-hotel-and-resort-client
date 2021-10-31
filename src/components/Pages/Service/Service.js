import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import "./Service.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Service = (props) => {
  const { name, desc, img, price, shift, subName, _id } = props.service;
  const OrderPlaced = (data) => {
    axios.post("https://stormy-basin-87659.herokuapp.com/reviewOrder", data).then((res) => console.log(res.data));
  };
  return (
    <div>
      <Col>
        <Card className="border-0 shadow">
          <div className="parent-card">
            <Card.Img style={{ width: "400px", height: "475px" }} variant="top" src={img} />
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
                <Link to={`/orderPlace/${_id}`}>
                  <Button onClick={() => OrderPlaced(props.service)} className="bg-custom-color border-0 py-2 px-3 fs-5">
                    Booking Now
                  </Button>
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

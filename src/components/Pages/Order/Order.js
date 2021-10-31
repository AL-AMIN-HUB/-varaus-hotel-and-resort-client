import React from "react";
import { Card, Col } from "react-bootstrap";

const Order = (props) => {
  const { name, desc, img, price, shift, subName } = props.od;
  return (
    <div>
      <Col>
        <Card className="border-0 shadow">
          <Card.Img style={{ height: "400px" }} variant="top" src={img} />
          <Card.Body>
            <Card.Title>
              <h4>{name}</h4>
              <p className="lead text-muted">{subName}</p>
            </Card.Title>
            <Card.Text>
              <p className="lead">{desc}</p>
              <p>
                Price: <span className="fw-bold">${price}</span> / <span>{shift}</span>
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Order;

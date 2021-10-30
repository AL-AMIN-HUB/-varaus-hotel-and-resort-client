import React from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="my-5 pb-5 container">
      <Row xs={1} sm={1} md={3} className="g-4 py-5">
        <Col className="text-center">
          <Card className="border-0 shadow p-3 bg-white">
            <div>
              <i className="fas fa-globe-americas"></i>
            </div>
            <Card.Body>
              <Card.Title>
                <p className="lead">Hotel Address:</p>
              </Card.Title>
              <Card.Text>
                <h5 className=" text-color"> 25 North Street, Dhaka</h5>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="text-center">
          <Card className="border-0 shadow p-3 bg-white">
            <div>
              <i className="far email-icon fa-envelope"></i>
            </div>
            <Card.Body>
              <Card.Title>
                <p className="lead">Official Mail:</p>
              </Card.Title>
              <Card.Text>
                <h4 className="text-color">info@alaminsbl502.com</h4>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="text-center">
          <Card className="border-0 shadow p-3 bg-white">
            <div>
              <i className="fas fa-headset"></i>
            </div>
            <Card.Body>
              <Card.Title>
                <p className="lead">Official Phone:</p>
              </Card.Title>
              <Card.Text>
                <h5 className="text-color"> +88 019-062-215</h5>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/*  */}
      <Form className="shadow p-5">
        <Row className="mb-5">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Control className="px-2 py-3" type="text" placeholder="Fast Name" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Control className="px-2 py-3" type="text" placeholder="Last Name" />
          </Form.Group>
        </Row>
        <Row className="mb-5">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Control className="px-2 py-3" type="email" placeholder="Email" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Control className="px-2 py-3" type="password" placeholder="Password" />
          </Form.Group>
        </Row>

        <Form.Control as="textarea" placeholder="Message" style={{ height: "200px" }} />

        <div className="text-center my-5">
          <button className="contact-btn py-3 fs-5 px-5" variant="primary" type="submit">
            Send Message
          </button>
        </div>
      </Form>
    </div>
  );
};

export default ContactUs;

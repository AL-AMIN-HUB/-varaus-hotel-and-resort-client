import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./Destinat.css";

const Destinat = () => {
  return (
    <div style={{ backgroundColor: "#F5FBF9" }} className="Destinat py-5 text-center">
      <p className="lead fw-bold text-custom-color"> Popular Destination</p>
      <h2 className="about-text text-color"> Choose Your Country</h2>

      <Row style={{ padding: "5rem 3rem" }} xs={1} sm={1} md={5} className="g-4">
        <Col>
          <div className="col-parent">
            {" "}
            <Card className="parent">
              <Card.Img variant="top" src="https://i.ibb.co/s1DLM6M/img-9-428b9720.jpg" />
              <Card.Body className="child">
                <Card.Text>
                  <div className="d-flex justify-content-between px-2">
                    <div>
                      <p className="text-start fs-3 child-p">Singapore</p>
                      <p>
                        <small className="text-muted">30-Oct-21 - 12-Nov-21</small>
                      </p>
                    </div>
                    <div>
                      <h3 className="text-custom-color fw-bold">$699</h3>
                      <h5>Per Day</h5>
                    </div>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Col>{" "}
        <Col>
          <div className="col-parent">
            {" "}
            <Card className="parent">
              <Card.Img variant="top" src="https://i.ibb.co/hWhmtrS/img-8-fd668895.jpg" />
              <Card.Body className="child">
                <Card.Text>
                  <div className="d-flex justify-content-between px-2">
                    <div>
                      <p className="text-start fs-3 child-p">Singapore</p>
                      <p>
                        <small className="text-muted">30-Oct-21 - 12-Nov-21</small>
                      </p>
                    </div>
                    <div>
                      <h3 className="text-custom-color fw-bold">$750</h3>
                      <h5>Per Day</h5>
                    </div>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Col>{" "}
        <Col>
          <div className="col-parent">
            {" "}
            <Card className="parent">
              <Card.Img variant="top" src="https://i.ibb.co/hCkLZj6/img-7-2029a8b3.jpg" />
              <Card.Body className="child">
                <Card.Text>
                  <div className="d-flex justify-content-between px-2">
                    <div>
                      <p className="text-start fs-3 child-p">San Francisco</p>
                      <p>
                        <small className="text-muted">30-Oct-21 - 12-Nov-21</small>
                      </p>
                    </div>
                    <div>
                      <h3 className="text-custom-color fw-bold">$875</h3>
                      <h5>Per Day</h5>
                    </div>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Col>{" "}
        <Col>
          <div className="col-parent">
            {" "}
            <Card className="parent">
              <Card.Img variant="top" src="https://i.ibb.co/X3byqDW/img-6-70c6704a.jpg" />
              <Card.Body className="child">
                <Card.Text>
                  <div className="d-flex justify-content-between px-2">
                    <div>
                      <p className="text-start fs-3 child-p">United Arab</p>
                      <p>
                        <small className="text-muted">30-Oct-21 - 12-Nov-21</small>
                      </p>
                    </div>
                    <div>
                      <h3 className="text-custom-color fw-bold">$810</h3>
                      <h5>Per Day</h5>
                    </div>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Col>{" "}
        <Col>
          <div className="col-parent">
            {" "}
            <Card className="parent">
              <Card.Img variant="top" src="https://i.ibb.co/Scx62ty/img-5-0c1c8321.jpg" />
              <Card.Body className="child">
                <Card.Text>
                  <div className="d-flex justify-content-between px-2">
                    <div>
                      <p className="text-start fs-3 child-p">Paris, France</p>
                      <p>
                        <small className="text-muted">30-Oct-21 - 12-Nov-21</small>
                      </p>
                    </div>
                    <div>
                      <h3 className="text-custom-color fw-bold">$680</h3>
                      <h5>Per Day</h5>
                    </div>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Destinat;

import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const BlogPost = () => {
  return (
    <div className="mt-5 py-5 w-75 mx-auto">
      <div className="mb-5">
        <p className="lead fw-bold text-custom-color "> Blog Post</p>
        <h2 className="fs-1 text-color about-text"> Our Latest News</h2>
      </div>
      <Row xs={1} sm={1} md={3} className="g-4 mb-5 pb-5">
        <Col>
          <Card className="border-0 shadow">
            <Card.Img variant="top" className="img-fluid" src="https://i.ibb.co/vx3pbTf/1-9be9c82e.jpg" />
            <Card.Body>
              <Card.Title>
                <p className="lead text-muted">
                  <span className="rounded-pill border px-3 pb-1 me-2">Travelling</span> <span>30-Oct-21</span>
                </p>
              </Card.Title>
              <Card.Text className="text-color">
                <h2> Things You Must Need To See While You’re In Dubai</h2>
                <Link to="/room" className="text-custom-color fw-bold">
                  Continue
                </Link>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="border-0 shadow">
            <Card.Img variant="top" className="img-fluid" src="https://i.ibb.co/Cpccy69/2-93e2d884.jpg" />
            <Card.Body>
              <Card.Title>
                <p className="lead text-muted">
                  <span className="rounded-pill border px-3 pb-1 me-2">Travelling</span> <span>30-Oct-21</span>
                </p>
              </Card.Title>
              <Card.Text className="text-color">
                <h2> Be Careful About This, When You Are In Snow</h2>
                <Link to="/room" className="text-custom-color fw-bold">
                  Continue
                </Link>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="border-0 shadow">
            <Card.Img variant="top" className="img-fluid" src="https://i.ibb.co/LhrQMrW/3-b543cb2d.jpg" />
            <Card.Body>
              <Card.Title>
                <p className="lead text-muted">
                  <span className="rounded-pill border px-3 pb-1 me-2">Travelling</span> <span>30-Oct-21</span>
                </p>
              </Card.Title>
              <Card.Text className="text-color">
                <h2> 17 places you cannot ignore in Paris</h2>
                <Link to="/room" className="text-custom-color fw-bold">
                  Continue
                </Link>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default BlogPost;

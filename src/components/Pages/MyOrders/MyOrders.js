import React, { useEffect, useState } from "react";
import { Spinner, Button, Row } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import Order from "../Order/Order";

const MyOrders = () => {
  const { user, setIsLoading, isLoading } = useAuth();
  const [order, setOrder] = useState([]);
  useEffect(() => {
    fetch(`https://stormy-basin-87659.herokuapp.com/myOrder/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(true);
        setOrder(data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [setIsLoading, user?.email]);
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
    <div style={{ height: "100vh" }} className="py-5">
      <h1 className="text-custom-color text-center mb-5">Your Order Found {order.length}</h1>
      <Row xs={1} sm={1} md={3} className="g-4 container mx-auto">
        {order.map((od) => (
          <Order key={od._id} od={od}></Order>
        ))}
      </Row>
    </div>
  );
};

export default MyOrders;

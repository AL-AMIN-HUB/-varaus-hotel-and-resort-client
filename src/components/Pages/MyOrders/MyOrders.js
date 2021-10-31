import React, { useEffect, useState } from "react";
import { Spinner, Button } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";

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
    <div style={{ height: "100vh" }}>
      <h1>My Orders {order.length} </h1>
    </div>
  );
};

export default MyOrders;

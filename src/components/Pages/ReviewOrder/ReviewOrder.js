import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const ReviewOrder = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const url = "https://stormy-basin-87659.herokuapp.com/reviewOrder";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  // delete orders

  const handleDelete = (id) => {
    const url = `https://stormy-basin-87659.herokuapp.com/reviewOrder/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          window.confirm("Are you sure you want to delete?");
        }
        const remaining = orders.filter((order) => order._id !== id);
        setOrders(remaining);
      });
  };

  return (
    <div className="mt-5 container">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Room</th>
            <th>Name</th>
            <th>Information</th>
            <th>Price</th>
            <th>Cancel</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr>
              <td>
                <img style={{ height: "100px" }} className="img-fluid w-100" src={order.img} alt="" />
              </td>
              <td>
                {" "}
                <span className="fs-5"> {order.name}</span>
                <br />
                <span className=" text-muted"> {order.subName}</span>
              </td>
              <td className="">
                {order?.desc?.slice(0, 50)} <br /> {order?.desc?.slice(50, 100)}
                {order?.desc?.slice(100, 150)}...
              </td>
              <td className="fw-bold">${order.price}</td>
              <td className="text-center">
                <button onClick={() => handleDelete(order._id)} className="btn border-0 btn-danger m-1">
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ReviewOrder;

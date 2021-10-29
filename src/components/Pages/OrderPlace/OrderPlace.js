import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useParams } from "react-router";

const OrderPlace = () => {
  const { id } = useParams();
  const [orders, setOrders] = useState({});

  useEffect(() => {
    const url = `https://stormy-basin-87659.herokuapp.com/orderPlace/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [id]);

  return (
    <div className="mt-5 container">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Room</th>
            <th>Name</th>
            <th>Information</th>
            <th>Price</th>
            <th>Cancel</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              <img style={{ height: "100px" }} className="img-fluid w-100" src={orders.img} alt="" />
            </td>
            <td>
              {" "}
              <span className="fs-5"> {orders.name}</span>
              <br />
              <span className=" text-muted"> {orders.subName}</span>
            </td>
            <td className="">
              {orders?.desc?.slice(0, 50)} <br /> {orders?.desc?.slice(50, 100)}
              {orders?.desc?.slice(100, 150)}...
            </td>
            <td className="fw-bold">${orders.price}</td>
            <td className="text-center">
              <button className="btn border-0 btn-danger">X</button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default OrderPlace;

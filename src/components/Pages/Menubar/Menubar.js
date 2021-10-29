import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import logo from "../../../images/logo.png";
import "./Menubar.css";

const Menubar = () => {
  const { logOut, user } = useAuth();
  return (
    <div>
      <Navbar fixed="top" collapseOnSelect expand="lg" className="pt-5" bg="white" variant="light">
        <Container>
          <Navbar.Brand>
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavLink
                activeStyle={{
                  fontWeight: "bold",
                  color: "#2cc292",
                }}
                style={{ color: "#000" }}
                className="text-decoration-none fs-5 me-3"
                to="/home"
              >
                Home
              </NavLink>
              <NavLink
                activeStyle={{
                  fontWeight: "bold",
                  color: "#2cc292",
                }}
                style={{ color: "#000" }}
                className="text-decoration-none fs-5 me-3"
                to="/room"
              >
                Room
              </NavLink>{" "}
              <NavLink
                activeStyle={{
                  fontWeight: "bold",
                  color: "#2cc292",
                }}
                style={{ color: "#000" }}
                className="text-decoration-none fs-5 me-3"
                to="/contact"
              >
                Contact
              </NavLink>
              <NavLink
                activeStyle={{
                  fontWeight: "bold",
                  color: "#2cc292",
                }}
                style={{ color: "#000" }}
                className="text-decoration-none fs-5 me-3"
                to="/about"
              >
                About
              </NavLink>
            </Nav>
            <div>
              <Nav>
                {user?.email ? (
                  <div className="menu-item align-items-center">
                    <div>
                      <NavLink
                        activeStyle={{
                          fontWeight: "bold",
                          color: "#2cc292",
                        }}
                        className="text-decoration-none fs-5 me-3 mt-2"
                        to="/addServices"
                      >
                        Add Services
                      </NavLink>
                      <NavLink
                        activeStyle={{
                          fontWeight: "bold",
                          color: "#2cc292",
                        }}
                        className="text-decoration-none fs-5 me-3 mt-2"
                        to="/myOrders"
                      >
                        My Orders
                      </NavLink>
                      <NavLink
                        activeStyle={{
                          fontWeight: "bold",
                          color: "#2cc292",
                        }}
                        className="text-decoration-none fs-5 me-3 mt-2"
                        to="/manageAllOrder"
                      >
                        Manage All Orders
                      </NavLink>
                    </div>
                    <div>
                      <NavLink className="text-decoration-none me-3" to="/register">
                        <button onClick={logOut} className="btn register-btn text-white  fs-5 px-4">
                          Logout
                        </button>
                      </NavLink>
                    </div>
                    <img className="img-fluid" style={{ width: "35px", borderRadius: "50%" }} src={user.photoURL} alt="" />{" "}
                    <span className="fs-5">{user.displayName}</span>
                  </div>
                ) : (
                  <div>
                    <NavLink className="text-decoration-none me-3" to="/login">
                      <button className="btn register-btn text-white  fs-5 px-4">Login</button>
                    </NavLink>
                    <NavLink className="text-decoration-none   me-3" to="/register">
                      <button className="btn btn-outline-dark  fs-5"> Register</button>
                    </NavLink>
                  </div>
                )}
              </Nav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Menubar;

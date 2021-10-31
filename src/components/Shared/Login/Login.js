import React, { useState } from "react";
import { useLocation, useHistory } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import loginLogo from "../../../images/login.svg";
import "./Login.css";

const Login = () => {
  const history = useHistory();
  const location = useLocation();
  const url = location.state?.from || "./home";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { handleLogin, setUser, setIsLoading } = useAuth();

  const handleSubmit = (e) => {
    handleLogin(email, password)
      .then((res) => {
        setIsLoading(true);
        // Signed in
        setUser(res.user);
        history.push(url);
        // ...
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
    e.target.value = "";
    e.preventDefault();
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div style={{ height: "100vh" }} className="login container mt-5 mx-auto row">
      <div className="col-md-7">
        <img className="img-fluid w-100" src={loginLogo} alt="" />
      </div>
      <div className="col-md-5">
        <form onSubmit={handleSubmit}>
          <input onChange={handleEmail} placeholder="Email" type="email" />
          <input onChange={handlePassword} placeholder="Password" type="password" />
          <input className="border-0 border-bottom fs-5 bg-custom-color text-white" value="Log In" type="submit" />
        </form>
        <p>
          <span className="ms-2"> Create a new account? Please</span>{" "}
          <Link className="text-decoration-none" to="/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

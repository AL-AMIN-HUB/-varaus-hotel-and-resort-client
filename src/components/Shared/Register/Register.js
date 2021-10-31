import React, { useState } from "react";
import { useLocation, useHistory } from "react-router";
import "./Register.css";
import { Link } from "react-router-dom";
import registerLogo from "../../../images/register.svg";
import useAuth from "../../../hooks/useAuth";

const Register = () => {
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/home";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signInGoogle, setIsLoading, setUser, handleRegister, name, setName, updateName } = useAuth();

  // handle submit
  const handleSubmit = (e) => {
    handleRegister(email, password)
      .then((res) => {
        history.push(redirect_uri);
        setIsLoading(true);
        updateName(name);
        // Signed in
        setUser(res.user);
        // ...
      })
      .catch((error) => {
        console.log(error.message);
        // ..
      })
      .finally(() => {
        setIsLoading(false);
      });
    e.preventDefault();
  };

  // handleGoogle login
  const handleGoogleLogin = () => {
    signInGoogle()
      .then((res) => {
        history.push(redirect_uri);
        setIsLoading(true);
        setUser(res.user);
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="register container mx-auto row">
      <h3 style={{ fontSize: "3rem" }} className="d-none d-md-block">
        Create a new account
      </h3>
      <div className="col-md-5">
        <form onSubmit={handleSubmit}>
          <input onChange={handleName} placeholder="Name" type="text" />
          <input onChange={handleEmail} placeholder="Email" type="email" />
          <input onChange={handlePassword} placeholder="Password" type="password" />
          <input className="border-0 border-bottom fs-5 bg-custom-color text-white" value="Continue" type="submit" />
        </form>
        <p>
          Already Registered?
          <Link className="text-decoration-none text-dark" to="/login">
            <span className="text-primary"> Please Login</span>
          </Link>
        </p>
        <p className=" text-center my-5 fs-4">--------------- OR ----------------</p>
        <div className="text-center">
          {" "}
          <button onClick={handleGoogleLogin} className="btn btn-success px-3 fs-5">
            <img style={{ width: "30px" }} src="https://iconape.com/wp-content/png_logo_vector/google-g-2015.png" alt="" />{" "}
            <span>Sign In With Google</span>
          </button>
        </div>
      </div>
      <div className="col-md-7">
        <img className="img-fluid w-100" src={registerLogo} alt="" />
      </div>
    </div>
  );
};

export default Register;

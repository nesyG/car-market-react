import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../Stores/TokenStore";
import "./Login.css";

const Login = () => {
  const store = React.useContext(StoreContext);
  let navigate = useNavigate();

  const [isLoginOpen, setIsLoginOpen] = useState(false);

  //Local state holding user input
  const [formValue, setFormValue] = useState({
    username: "",
    password: "",
    grant_type: "password",
  });

  //Function to set all of user input into local state
  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  //Function handling API POST request
  const handlePost = async function (e) {
    e.preventDefault();
    let res = await axios({
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: formValue,
      url: "https://api.baasic.com/beta/new-react-project/login",
    });
    let data = await res.data;
    store.addToken(data);
    navigate("/home");
  };

  return (
    <div className="root">
      <h1 className="welcome-container">THE Car Market</h1>
      <div className="login-container">
        {isLoginOpen == false ? (
          <h3
            className="btn btn-light"
            onClick={() => {
              setIsLoginOpen(!isLoginOpen);
            }}
          >
            Login
          </h3>
        ) : (
          <div>
            <div class="form-group">
              <label for="username" className="label-text">
                Username
              </label>
              <input
                name="username"
                type="username"
                className="form-control"
                value={formValue.username}
                onChange={handleInput}
                placeholder="janedoe123"
              />
            </div>
            <div class="form-group">
              <label for="password" className="label-text">
                Password
              </label>
              <input
                name="password"
                type="password"
                className="form-control"
                value={formValue.password}
                onChange={handleInput}
              />
            </div>
            <button
              type="submit"
              onClick={handlePost}
              className="btn btn-secondary"
            >
              Login
            </button>
          </div>
        )}
      </div>
      <div className="login-card-container">
        <div class="card login-card">
          <div class="card-body login-card-body">
            <h3 class="card-title rounded main-text">
              Extensive Choice of Cars
            </h3>
            <p class="card-text lorem">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
        </div>
        <div class="card login-card">
          <div class="card-body login-card-body ">
            <h3 class="card-title rounded  main-text">
              All Parts in one place
            </h3>
            <p class="card-text lorem">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

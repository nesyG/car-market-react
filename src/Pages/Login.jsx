import React, {useState, useContext} from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Login.css";
import axios from "axios";
import {StoreContext , StoreProvider} from "../Stores/TokenStore"

const Login = () => {
 
  let navigate= useNavigate();

  const [onLoginHover, setOnLoginHover] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const initialValues = {
    username: "",
    password: "",
  } 

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("This field is required!"),
    password: Yup.string().required("This field is required!"),
  });

  function toggleLoginChange() {
    setOnLoginHover(!onLoginHover);
  }
  //post request on login
  const [formValue, setFormValue] = useState({ username: "", password: "", grant_type: "password" });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

 

  const store = React.useContext(StoreContext)
   const handlePost =  async (e) => {
    e.preventDefault();
    let res =  await axios({
      method: "POST",
      headers: { 
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: formValue,
      url: "https://api.baasic.com/beta/new-react-project/login",
    })
    let data = res.data
    store.addToken(data)
    navigate("/home")
  
  };

  return (
    <div>
      <h1 className="welcome-container">Welcome to THE Car Market</h1>
      <div className="login-container">
        <h3
          className={onLoginHover ? "login-btn login-hover" : "login-btn"}
          onMouseOver={toggleLoginChange}
          onMouseLeave={toggleLoginChange}
          onClick={() => setIsLoginOpen(!isLoginOpen)}
        >
          Login
        </h3>
        {isLoginOpen && (
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handlePost}
          >
            <Form>
              <div className="login-form-container">
                <label htmlFor="username">username</label>
                <Field
                  name="username"
                  type="username"
                  className="form-control"
                  value={formValue.username}
                  onChange={handleInput}
                  placeholder="janedoe123"
                />
              </div>

              <div className="login-form-container ">
                <label htmlFor="password">Password</label>
                <Field
                  name="password"
                  type="password"
                  className="form-control"
                  value={formValue.password}
                  onChange={handleInput}
                />
              </div>

              <div className="form-group">
                <button
                  type="submit"
                  className="btn btn-secondary btn-block"
                  onClick={handlePost}
                >
                  <span>Login</span>
                </button>
              </div>

              {/* {message && (
               <div className="form-group">
                 <div className="alert alert-danger" role="alert">
                   {message}
                 </div>
               </div>
             )} */}
            </Form>
          </Formik>
        )}
      </div>
    </div>
  );
};

export default Login;
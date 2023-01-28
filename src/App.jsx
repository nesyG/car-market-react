import React, {useState} from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home"
import Listing from "./Pages/Listing/Listing"

const App = () => {
  // const [getToken, setGetToken] = useState("");

  // function setToken(getToken) {
  //   setGetToken(getToken);
  // }

  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/listing" element={<Listing />} />
      </Routes>
    </div>
  );
};

export default App;

import React, {useState} from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home"
import Listing from "./Pages/Listing/Listing"
import {StoreProvider} from "./Stores/TokenStore";

const App = () => {
  // const [getToken, setGetToken] = useState("");

  // function setToken(getToken) {
  //   setGetToken(getToken);
  // }

  return (
    <StoreProvider>
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/listing" element={<Listing />} />
      </Routes>
    </div>
    </StoreProvider>
  );
};

export default App;

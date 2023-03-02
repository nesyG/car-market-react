import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { RootProvider } from "./Stores/RootStore";

const Login = lazy(() => import("./Pages/Login"));
const Home = lazy(() => import("./Pages/Home"));
const SingleListing = lazy(() => import("./Pages/SingleListing"));

const App = () => {
  return (
    <>
      <RootProvider>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/singleListing/:id" element={<SingleListing />} />
          </Routes>
        </Suspense>
      </RootProvider>
    </>
  )
}

export default App;

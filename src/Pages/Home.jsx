import React from "react";
import BrowseButtons from "../Components/BrowseButtons";
import ListingsSection from "../Components/ListingsSection";
import "./Home.css";

const Home = () => {
  return (
    <>
      <h1 class="h1 home-h1">Find your dream car</h1>
      <div className="hero-section">
        <BrowseButtons />
        <ListingsSection />
      </div>
    </>
  );
};

export default Home;

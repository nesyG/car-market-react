import React from "react";
import { observer } from "mobx-react";
import BrowseButtons from "../Components/BrowseButtons";
import ListingsSection from "../Components/ListingsSection";
import "./Home.css";

const Home = () => {
  return (
    <>
      <h1 className="h1 home-h1">Find your dream car</h1>
      <div className="hero-section">
        <BrowseButtons />
        <ListingsSection />
      </div>
    </>
  );
};

export default observer(Home);

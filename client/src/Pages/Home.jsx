import React from "react";
import { observer } from "mobx-react";
import FilterSection from "../Components/HomeComponents/FilterSectionComponents/FilterSection";
import ListingsSection from "../Components/HomeComponents/ListingsSectionComponents/ListingsSection";
import NewListing from "../Components/HomeComponents/NewListing"
import "./Home.css";

const Home = () => {
  return (
    <>
    <div className="top">
    <h1 className="h1 home-h1">Find your dream car</h1>
    </div>
      <div className="hero-section">       
      <div className="filterListinContainer">
       <FilterSection />
        <NewListing />
      </div>
        
        <ListingsSection />
      </div>
    </>
  )
}

export default observer(Home);

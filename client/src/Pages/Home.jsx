import React, {useEffect} from "react";
import { observer } from "mobx-react";
import FilterSection from "../Components/HomeComponents/FilterSectionComponents/FilterSection";
import ListingsSection from "../Components/HomeComponents/ListingsSectionComponents/ListingsSection";
import NewListing from "../Components/HomeComponents/NewListing";
import "./Home.css";

const Home = () => {
  useEffect(() => {
    fetch("http://localhost:3500", {
      method: "GET",
    })
    .then(function(response) {
      return response.json();
    }).then(function(data) {
     
      console.log(data);
    });
  }, []);

  return (
    <>
    <div className="top">
    <h1 className="h1 home-h1">Find your dream car</h1>
      <NewListing />
    </div>
      <div className="hero-section">
        <FilterSection />
        <ListingsSection />
      </div>
    </>
  )
}

export default observer(Home);

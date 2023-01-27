import React from "react";
import "./ListingsSection.css"
import SingleListing from "./SingleListing";



const ListingsSection = () => {  
    return (
        <div className="data-container">
        <div className="sort-section">Sort: <input type="text" placeholder="Date"/></div>
        <h2>Fetched Data</h2>
        <SingleListing />
        </div>
    )
}

export default ListingsSection
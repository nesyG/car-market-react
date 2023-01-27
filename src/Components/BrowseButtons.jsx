import React from "react";
import "./BrowseButtons.css"


const BrowseButtons = () => {
    const browseCategories = ["MODEL", "BRAND", "YEAR", "COLOR", "PRICE"]   
    return (
        <div>
        <span>Browse by:</span>
        <div className="browseButtonsContainer">
            {browseCategories.map((category) => {
               return(<button className="browseButton">{category}</button>) 
            })}
            
        </div>
        <button className="searchButton">Search</button>
        </div>
    )
}

export default BrowseButtons
import React from "react";
import { useNavigate } from "react-router-dom";
import "./SingleCarItem.css"

const SingleCarItem = () => {   //For future implementation
    let navigate = useNavigate()

    function getThisListing () {
       
        navigate("/listing")
    }

    return (
        <div className="single-car-container">
        <h4>I am one record, click me!</h4>
        <button onClick={getThisListing}>More info</button>
        </div>
    )
}

export default SingleCarItem

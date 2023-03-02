import React from "react";
import { useParams } from "react-router-dom";
import "./SingleCarItem.css"

const SingleCarItem = () => {   //For future implementation
    const id = useParams();

    return (
        <div className="single-car-container">
       This page will be available soon!
        </div>
    )
}

export default SingleCarItem;

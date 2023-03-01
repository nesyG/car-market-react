import React from "react";
import { useParams } from "react-router-dom";
import { RootContext } from "../../Stores/RootStore";
import "./SingleCarItem.css"

const SingleCarItem = () => {   //For future implementation
    const rootStore = React.useContext(RootContext);
    const dataStore = rootStore.dataStore;

    const id = useParams()
    console.log(id.id)

    console.log(dataStore.carData)

    return (
        <div className="single-car-container">
       This page will be available soon!
        </div>
    )
}

export default SingleCarItem

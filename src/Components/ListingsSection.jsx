import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ListingsSection.css"
import SingleCarItem from "./SingleCarItem";
import {StoreContext , StoreProvider} from "../Stores/TokenStore"



const ListingsSection = () => {  
    const store = React.useContext(StoreContext)
    const [carInfo, setCarInfo] = useState()
   
    useEffect(()=> {
        let res = axios({
            method: "GET",
            headers: { 
              "Authorization": `bearer ${store.token}`,
              "Content-Type": "application/json"
            },
            url: "https://api.baasic.com/beta/new-react-project/resources/car?page=2",
          }).then(res => res.data).then(setCarInfo)
         
    }, [])
    console.log(carInfo)
    console.log(store.token)


    return (
        <div className="data-container">
        <div className="sort-section">Sort: <input type="text" placeholder="Date"/></div>
        {carInfo !== undefined ? carInfo.item.map(elem => {
            return (
                <div className="card">
                <span>{elem.car}</span>
                <span>{elem.car_model}</span>
                <span>{elem.car_model_year}</span>
                <span>{elem.price}</span>
                </div>
            )
        }) : ""}
        <SingleCarItem />
        
        </div>
    )
}

export default ListingsSection
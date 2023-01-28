import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ListingsSection.css"
import SingleCarItem from "./SingleCarItem";



const ListingsSection = () => {  
    const [carInfo, setCarInfo] = useState()
   
    useEffect(()=> {
        let res = axios({
            method: "GET",
            headers: { 
              "Authorization": "bearer 34B2C16657A0A96B02C6B1366267E492DE4BCE903C42DBD8DDFB439FDA88862CB455D510E81AA149FA7F8D814D39149A81FF5F1DE2CEEB72283A9C84FD3659DB5F9F72FF9BB1C0877FEA2F6812443A8896D0F89FFCC4CF8E1C3533FA7EFF0051C55BEB9FB6767D1BEBF34E66C9E4F73E0DD4978B89D699EB2C54CAD9609E6DAEE0914C49139F7F008F225C429AA82664285EFB9F51B601DF3FAE95C8E1488A1BF2B065760FF55FF54EECB93CAE22CB772352827B3FF2E2F4DFF5EB7453A8703B",
              "Content-Type": "application/json"
            },
            url: "https://api.baasic.com/beta/new-react-project/resources/car?page=2",
          }).then(res => res.data).then(setCarInfo)
         
    }, [])
    console.log(carInfo)


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
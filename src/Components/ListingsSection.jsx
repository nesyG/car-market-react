import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ListingsSection.css";
import SingleCarItem from "./SingleCarItem";
import { StoreContext } from "../Stores/TokenStore";
import PageToggleButton from "./PageToggleButton";
import { PaginationContext } from "../Stores/PaginationStore";


const ListingsSection = () => {
  const store = React.useContext(StoreContext);
  const paginationStore = React.useContext(PaginationContext);
 
  const [carInfo, setCarInfo] = useState();

  useEffect(() => {
    let res = axios({
      method: "GET",
      headers: {
        Authorization: `bearer ${store.token}`,
        "Content-Type": "application/json",
      },
      url: "https://api.baasic.com/beta/new-react-project/resources/car?page=1",
    })
      .then((res) => res.data)
      .then(setCarInfo);
  }, []);

  function getPage() {
    let res = axios({
      method: "GET",
      headers: {
        Authorization: `bearer ${store.token}`,
        "Content-Type": "application/json",
      },
      url: test == undefined ? `https://api.baasic.com/beta/new-react-project/resources/car?page=${paginationStore.page}` : `https://api.baasic.com/beta/new-react-project/resources/car?page=${paginationStore.page}&sort=${test}`
    })
      .then((res) => res.data)
      .then(setCarInfo);
    console.log(carInfo);
  }

  function testOne () {
    let res = axios({
        method: "GET",
        headers: {
          Authorization: `bearer ${store.token}`,
          "Content-Type": "application/json",
        },
        url: `https://api.baasic.com/beta/new-react-project/resources/car?page=${paginationStore.page}&sort=${test}`,
      })
        .then((res) => res.data)
        .then(setCarInfo);
       
  }

 const [test, setTest] = useState()
    const handleInput = (e) => {
        const { value } = e.target;
        setTest(value);
      };
    
 
  return (
    <div className="data-container">
      <label for="sort">Sort by:</label>
      <select name="sort" id="sort" className="sort-section" onChange={handleInput}>
        <option value="none" selected>
          Select an option
        </option>
        <option value="car_model_year|asc">Car Model Year</option>
        <option value="price|asc">Price</option>
      </select>
      <button onClick={testOne} >Sort</button>

      <div className="card-container">
        {carInfo !== undefined
          ? carInfo.item.map((elem) => {
              return (
                <div className="card">
                  <span>{elem.car}</span>
                  <span>{elem.car_model}</span>
                  <span>{elem.car_model_year}</span>
                  <span>{elem.price}</span>
                </div>
              );
            })
          : ""}
      </div>
      <PageToggleButton changePage={getPage} />
      <SingleCarItem />
    </div>
  )

}


export default ListingsSection;

//https://api.baasic.com/beta/new-react-project/resources/car?searchQuery=WHERE car_color = 'Puce' - browsing by query api endpoint example
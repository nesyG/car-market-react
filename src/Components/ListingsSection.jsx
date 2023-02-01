import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ListingsSection.css";
import SingleCarItem from "./SingleCarItem";
import { StoreContext } from "../Stores/TokenStore";
import PageToggleButton from "./PageToggleButton";
import { PaginationContext } from "../Stores/PaginationStore";
import { DataContext } from "../Stores/DataStore";
import { useObserver } from "mobx-react";
import { runInAction } from "mobx";
import { BrowseContext } from "../Stores/BrowseStore";
import { SortingContext } from "../Stores/SortingStore";

const ListingsSection = () => {

  //Initialize relevant stores
  const store = React.useContext(StoreContext);
  const paginationStore = React.useContext(PaginationContext);
  const dataStore = React.useContext(DataContext);
  const browseStore = React.useContext(BrowseContext);
  const sortingStore = React.useContext(SortingContext);

  //Render initial car data
  useEffect(() => {
    dataStore.getCarData(store.token);
  }, []);

  //Render next or previous page
  async function getPage() {
    if(paginationStore.page >= 1) {
      let res = await axios({
        method: "GET",
        headers: {
          Authorization: `bearer ${store.token}`,
          "Content-Type": "application/json",
        },
        url:
          sortingStore.sortData == "" 
            ? `https://api.baasic.com/beta/new-react-project/resources/car?page=${paginationStore.page}`
            : `https://api.baasic.com/beta/new-react-project/resources/car?${browseStore.browsingData}&page=${paginationStore.page}&sort=${sortingStore.sortData}`,
      });
      let info = await res.data;
      runInAction(() => {
        dataStore.carData = info;
      });
    }
  }

  //Set sort state based on user selection
  async function handleSort (e) {
    
   
      let res = await axios({
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        url:
          sortingStore.sortData == "" 
            ? `https://api.baasic.com/beta/new-react-project/resources/car?page=${paginationStore.page}`
            : `https://api.baasic.com/beta/new-react-project/resources/car?${browseStore.browsingData}&page=${paginationStore.page}&sort=${sortingStore.sortData}`,
      });
      let info = await res.data;
      runInAction(() => {
        dataStore.carData = info;
      });
    }
  
  //Render pages based on sort state
  async function testOne(e) {
    const { value } = e.target;
    sortingStore.setSortData(value);

      let res = await axios({
        method: "GET",
        headers: {
          Authorization: `bearer ${store.token}`,
          "Content-Type": "application/json",
        },
        url: `https://api.baasic.com/beta/new-react-project/resources/car?page=${paginationStore.page}&sort=${sortingStore.sortData}`,
      });
      let info = await res.data;
      dataStore.getFilteredData(info);
  }

  return useObserver(() => {
    return (
      <div className="data-container">
        <label for="sort">Sort by:</label>
        <select
          name="sort"
          id="sort"
          className="sort-section"
          onChange={testOne}
        >
          <option value="none" selected>
            Select an option
          </option>
          <option value="car_model_year|asc">Car Model Year</option>
          <option value="price|asc">Price</option>
        </select>
        {/* <button onClick={testOne} >Sort</button> */}

        <div className="card-container">
          {dataStore.carData !== undefined && dataStore.carData.item
            ? dataStore.carData.item.map((elem) => {
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
      </div>
    );
  });
};

export default ListingsSection;
import React, { useEffect, useState } from "react";
import axios from "axios";
import { StoreContext } from "../Stores/TokenStore";
import PageToggleButton from "./PageToggleButton";
import { PaginationContext } from "../Stores/PaginationStore";
import { DataContext } from "../Stores/DataStore";
import { useObserver } from "mobx-react";
import { runInAction } from "mobx";
import { BrowseContext } from "../Stores/BrowseStore";
import { SortingContext } from "../Stores/SortingStore";
import "./ListingsSection.css";

const ListingsSection = () => {
  //Import relevant context
  const store = React.useContext(StoreContext);
  const paginationStore = React.useContext(PaginationContext);
  const dataStore = React.useContext(DataContext);
  const browseStore = React.useContext(BrowseContext);
  const sortingStore = React.useContext(SortingContext);

  //Fetch initial car data and save it to global state
  useEffect(() => {
    dataStore.getCarData(store.token);
  }, []);

  //Function for setting sort state
  async function setSortValue(e) {
    const { value } = e.target;
    sortingStore.setSortData(value);
  }

  //Function for calling next or previous page based on all sorting or filter criteria
  async function handleSortFilterAndPages() {
    let url = `https://api.baasic.com/beta/new-react-project/resources/car?page=${paginationStore.page}&rpp=12`;

    if (sortingStore.sortData) {
      url = url + `&sort=${sortingStore.sortData}`;
    } 

    let res = await axios.get(url, {
      headers: { "Content-type": "application/json" },
      params: browseStore.params,
    });
    
    let data = await res.data;
    if(!data.item.length){
       paginationStore.previousPage()
       return
    }
   
    runInAction(() => {
      dataStore.carData = data;
    });
  }

  return useObserver(() => {
    return (
      <div className="data-container">
        <div className="sorting-section">
          <span className="lead">Sort by:</span>
          <select
            class="form-select form-select-sm sort-container"
            aria-label="Default select"
            onChange={setSortValue}
          >
            <option selected>{null}</option>
            <option value="price|asc">Price (Lowest to Highest)</option>
            <option value="price|desc">Price (Highest to Lowest)</option>
          </select>
        </div>
        <div className="card-container">
          {dataStore.carData !== undefined && dataStore.carData.item ? (
            dataStore.carData.item.map((elem) => {
              return (
                <div class="card car-card">
                  <span class="material-symbols-outlined">car_rental</span>
                  <div class="card-body">
                    <h4 class="card-title">{elem.car}</h4>
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">{elem.car_model}</li>
                      <li class="list-group-item">{elem.car_model_year}</li>
                      <li class="list-group-item">{elem.car_color}</li>
                      <li class="list-group-item price-text">{elem.price}</li>
                    </ul>
                  </div>
                </div>
              );
            })
          ) : (
            <div class="spinner">
              <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
          {dataStore.carData.item == 0 && paginationStore.page > 1 ? paginationStore.nextPage == paginationStore.page : ""}
        </div>
        <PageToggleButton changePage={handleSortFilterAndPages} />
      </div>
    );
  });
};

export default ListingsSection;

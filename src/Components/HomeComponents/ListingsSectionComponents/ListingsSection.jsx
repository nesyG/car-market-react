import React, { useEffect } from "react";
import axios from "axios";
import { TokenContext } from "../../../Stores/TokenStore";
import PageToggleButton from "./PageToggleButton";
import { PaginationContext } from "../../../Stores/PaginationStore";
import { DataContext } from "../../../Stores/DataStore";
import { observer } from "mobx-react";
import { runInAction } from "mobx";
import { FilterContext } from "../../../Stores/BrowseStore";
import { SortingContext } from "../../../Stores/SortingStore";
import "./ListingsSection.css";

const ListingsSection = () => {
  //Import relevant context
  const tokenStore = React.useContext(TokenContext);
  const paginationStore = React.useContext(PaginationContext);
  const dataStore = React.useContext(DataContext);
  const filterStore = React.useContext(FilterContext);
  const sortStore = React.useContext(SortingContext);

  //Fetch initial car data and save it to global state
  useEffect(() => {
    dataStore.getCarData(tokenStore.token);
  }, []);

  //Function for setting sort state
  function setSortValue(e) {
    const { value } = e.target;
    sortStore.setSortData(value);
  }

  //Function for calling next or previous page based on all sorting or filter criteria
  async function handleSortFilterAndPages() {
    let url = `https://api.baasic.com/beta/new-react-project/resources/car?page=${paginationStore.page}&rpp=12`;

    if (sortStore.sortData) {
      url = url + `&sort=${sortStore.sortData}`;
    } 

    let res = await axios.get(url, {
      headers: { "Content-type": "application/json" },
      params: filterStore.params,
    });
    
    let data = await res.data;
    if(!data.item.length){
       paginationStore.setPreviousPage()
       return
    }

    runInAction(() => {
      dataStore.getFilteredData(data)
    
    });
  }

    return (
      <div className="data-container">
        <div className="sorting-section">
          <span className="lead">Sort by:</span>
          <select
            className="form-select form-select-sm sort-container"
            aria-label="Default select"
            onChange={setSortValue}
          >
            <option defaultValue={null} >{null}</option>
            <option value="price|asc">Price (Lowest to Highest)</option>
            <option value="price|desc">Price (Highest to Lowest)</option>
          </select>
        </div>
        <div className="card-container">
          {dataStore.carData !== undefined && dataStore.carData.item ? (
            dataStore.carData.item.map((elem) => {
              return (
                <div className="card car-card" key={elem.id}>
                  <span className="material-symbols-outlined">car_rental</span>
                  <div className="card-body">
                    <h4 className="card-title">{elem.car}</h4>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">{elem.car_model}</li>
                      <li className="list-group-item">{elem.car_model_year}</li>
                      <li className="list-group-item">{elem.car_color}</li>
                      <li className="list-group-item price-text">{elem.price}</li>
                    </ul>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="spinner">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
        </div>
        <PageToggleButton changePage={handleSortFilterAndPages} />
      </div>
    );
};

export default observer(ListingsSection);

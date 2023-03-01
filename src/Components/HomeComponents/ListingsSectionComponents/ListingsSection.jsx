import React, { useEffect } from "react";
import PageToggleButton from "./PageToggleButton";
import { observer } from "mobx-react";
import { RootContext } from "../../../Stores/RootStore";
import "./ListingsSection.css";
import {Link} from "react-router-dom"

const ListingsSection = () => {
  //Import relevant context
  const rootStore = React.useContext(RootContext);
  const dataStore = rootStore.dataStore;
  const sortingStore = rootStore.sortingStore;
  const tokenStore = rootStore.tokenStore

  //Fetch initial car data and save it to global state
  useEffect(() => {
    dataStore.getCarData(tokenStore.token);
  }, [dataStore, tokenStore.token]);

  //Function for setting sort state
  function setSortValue(e) {
    const { value } = e.target;
    sortingStore.setSortData(value);
  }

    return (
      <div className="data-container">
        <div className="sorting-section">
          <span className="lead">Sort by:</span>
          <select
            className="form-select form-select-sm sort-container"
            aria-label="Default select"
            onChange={setSortValue}
            value={sortingStore.sortData}
          >
            <option value={""}>{null}</option>
            <option value="price|asc">Price (Lowest to Highest)</option>
            <option value="price|desc">Price (Highest to Lowest)</option>
          </select>
        </div>
        <div className="card-container">
          {dataStore.carData !== undefined && dataStore.carData.item ? (
            dataStore.carData.item.map((elem) => {
              return (
                <div className="card car-card" key={elem.id}>
                  <Link to={`/singleListing/${elem.id}`}>More Info</Link>
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
        <PageToggleButton />
      </div>
    );
};

export default observer(ListingsSection);

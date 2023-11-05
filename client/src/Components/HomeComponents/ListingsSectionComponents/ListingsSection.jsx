import React, { useEffect } from "react";
import PageToggleButton from "./PageToggleButton";
import DeleteButton from "./DeleteButton";
import SortDropdown from "./SortDropdown";
import EditListing from "./EditListing";
import { observer } from "mobx-react";
import { RootContext } from "../../../Stores/RootStore";
import {Link} from "react-router-dom";
import "./listingsSection.css";


const ListingsSection = () => {
  //Import relevant context
  const rootStore = React.useContext(RootContext);
  const {getCarData, carData} = rootStore.dataStore;
  const {setSortData, sortData} = rootStore.sortFilterPagingStore;
  const {token} = rootStore.tokenStore

  //Fetch initial car data and save it to global state
  useEffect(() => {
    getCarData(token);
  }, [] )

  //Function for setting sort state
  function setSortValue(e) {
    const { value } = e.target;
    setSortData(value);
  }

    return (
      <div className="data-container">
       <SortDropdown sortData={sortData} setSortValue={setSortValue}/>
        <div className="card-container">
          {carData !== undefined && carData.item ? (
            carData.item.map((elem) => {
              return (
                <div className="card car-card" key={elem.id}>
                  <div className="link-and-delete-btn">
                  <Link to={`/singleListing/${elem.id}`}>More Info</Link>
                  <EditListing {...elem}/>
                  <DeleteButton {...elem}/>
                  </div>
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
    )
}

export default observer(ListingsSection);

import React, { useEffect, useState } from "react";
import PageToggleButton from "./PageToggleButton";
import DeleteButton from "./DeleteButton";
import SortDropdown from "./SortDropdown";
import EditListing from "./EditListing";
import { observer } from "mobx-react";
import { RootContext } from "../../../Stores/RootStore";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import "./listingsSection.css";


const ListingsSection = () => {
  //Import relevant context
  const rootStore = React.useContext(RootContext);
  const { getCarData, carData } = rootStore.dataStore;
  const { setSortData, sortData } = rootStore.sortFilterPagingStore;
  const { token } = rootStore.tokenStore

  const [imageData, setImageData] = useState([]);
  const navigate = useNavigate();

  //Fetch initial car data and save it to global state
  useEffect(() => {
    getCarData(token);
  }, []);

  useEffect(() => {
    // Fetch images for each car model
    const fetchCarImages = async () => {
      try {
        if (carData && carData.item) {
          const promises = carData.item.map(async (elem) => {
            const response = await axios.get(`https://api.unsplash.com/search/photos?query=${elem.car}&client_id=pIgDUaF0Y5hYw2zU8z-my2JvqS_W5Bq3J0g-OWuD44s`);
            return response.data.results[0];
          });
          const imageDataArray = await Promise.all(promises);
          setImageData(imageDataArray);
        }
      } catch (error) {
        console.error('Error fetching car images:', error);
      }
    };

    fetchCarImages();
  }, [carData]);


  //Function for setting sort state
  function setSortValue(e) {
    const { value } = e.target;
    setSortData(value);
  }

  return (
    <div className="data-container bg-light">
      <SortDropdown sortData={sortData} setSortValue={setSortValue} />
      <div className="card-container">
        {carData !== undefined && carData.item ? (
          carData.item.map((elem, index) => (
            <div className="card car-card" key={elem.id}>
              <div className="link-and-delete-btn">
                <button className="btn btn-light col-4 flex-grow-1" onClick={() => navigate(`/singleListing/${elem.id}`, { state: { ...elem, imageData: imageData[index]?.urls?.small } })}>More info</button>
                <EditListing {...elem} />
                <DeleteButton {...elem} />
              </div>             
              <img id="carImg" src={imageData[index]?.urls?.small} alt="Car Image" />           
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
          ))
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

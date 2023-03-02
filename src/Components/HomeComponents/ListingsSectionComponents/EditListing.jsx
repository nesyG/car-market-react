import React, { useState } from "react";
import { RootContext } from "../../../Stores/RootStore";
import editListing from "../../../Common/services/editListingService";
import "./ListingsSection.css";

const EditListing = (props) => {
  const carId = props.id;
  const rootStore = React.useContext(RootContext);
  const [editIsOpened, setEditIsOpened] = useState(false);
  function toggleListingWindow() {
    setEditIsOpened(!editIsOpened);
  }

  const [carEditInput, setCarEditInput] = useState({
    id: carId,
    car: props.car,
    price: props.price,
    car_color: props.car_color,
    car_model: props.car_model,
    car_model_year: props.car_model_year,
    car_vin: props.car_vin,
    availability: props.availability,
    date_added: props.date_added,
  })

  function handleInput(e) {
    if (e.target.name === "car_model_year") {
      e.target.value = Number(e.target.value);
    }
    setCarEditInput({ ...carEditInput, [e.target.name]: e.target.value });
  }

  return (
    <>
        <button
          className="btn btn-light btn-sm ms-5 edit-btn"
          onClick={toggleListingWindow}
        >
          <span className="material-symbols-outlined btn-symbol">edit</span>
        </button>
      {editIsOpened && (
        <div className="editing-container">
          <button onClick={toggleListingWindow}>x</button>
          <h2>Edit your car listing</h2>
          <div className="new-listing-form">
            <label>Your car brand:</label>
            <input
              name="car"
              type="text"
              className="form-control"
              value={carEditInput.car}
              onChange={handleInput}
            ></input>
            <label>Your car model:</label>
            <input
              name="car_model"
              type="text"
              className="form-control"
              value={carEditInput.car_model}
              onChange={handleInput}
            ></input>
            <label>Your car model year:</label>
            <input
              name="car_model_year"
              type="text"
              className="form-control"
              value={carEditInput.car_model_year}
              onChange={handleInput}
            ></input>
            <label>Your car color:</label>
            <input
              name="car_color"
              type="text"
              className="form-control"
              value={carEditInput.car_color}
              onChange={handleInput}
            ></input>
            <label>Your car price:</label>
            <input
              name="price"
              type="text"
              className="form-control"
              value={carEditInput.price}
              onChange={handleInput}
            ></input>
            <button 
              onClick={() => {
                toggleListingWindow(),
                  editListing(rootStore, carEditInput, carId);
              }}
            >
              Edit
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default EditListing;

import React, { useState } from "react";
import { RootContext } from "../../../Stores/RootStore";
import editListing from "../../../Common/services/editListingService";
import "./listingsSection.css";

const EditListing = (props) => {
  const carId = props.id;
  const rootStore = React.useContext(RootContext);
  //Local state to toggle edit content
  const [editIsOpened, setEditIsOpened] = useState(false);
  function toggleListingWindow() {
    setEditIsOpened(!editIsOpened);
  }

  //State to track users edits
  let carData = {
    id: carId,
    car: props.car,
    price: props.price,
    car_color: props.car_color,
    car_model: props.car_model,
    car_model_year: props.car_model_year,
    car_vin: props.car_vin,
    availability: props.availability,
    date_added: props.date_added,
  }

  const [carEditInput, setCarEditInput] = useState(carData)
  function handleInput(e) {
    if (e.target.name === "car_model_year") {
      let a = Number(e.target.value)
      setCarEditInput({ ...carEditInput, [e.target.name]: a })
    } else {
      setCarEditInput({ ...carEditInput, [e.target.name]: e.target.value });
    }
  }

  return (
    <>
      <button
        className="btn btn-light edit-btn col-4"   
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop2"
        onClick={toggleListingWindow}
      >
        <span className="material-symbols-outlined btn-symbol">edit</span>
      </button>
      {editIsOpened && (
        <div
          className="modal fade"
          id="staticBackdrop2"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel2"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel2">
                  Edit your car listing
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={toggleListingWindow}
                ></button>
              </div>
              <div className="modal-body">
                <div className="edit-listing-form">
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
                  <button className="update-btn"
                    onClick={() => {
                      editListing(rootStore, carEditInput, carId);
                      toggleListingWindow();                       
                    }}
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default EditListing;

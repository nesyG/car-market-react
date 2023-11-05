import React, { useState } from "react";
import { observer } from "mobx-react";
import { RootContext } from "../../Stores/RootStore";
import addNewListing from "../../Common/services/addNewListingService";
import "./newListing.css";

const NewListing = () => {
  const rootStore = React.useContext(RootContext);
  //Local state for toggling content for creating new listing
  const [windowIsOpened, setwindowIsOpened] = useState(false);
  function toggleListingWindow() {
    setwindowIsOpened(!windowIsOpened);
  }

  //Local state for storing users input values for new listing
  const [carInput, setCarInput] = useState({
    car: "",
    price: "",
    car_color: "",
    car_model: "",
    car_model_year: 0,
    car_vin: "test",
    availability: true,
    date_added: "10th",
  });

  function handleInput(e) {
    let { name, value } = e.target;
    if (name === "car_model_year") {
      value = Number(value);
    }
    setCarInput({ ...carInput, [name]: value });
  }

  return (
    <>
      <button
        className="btn btn-light me-5 add-btn"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
        onClick={toggleListingWindow}
      >
        Add New Listing
      </button>
      {windowIsOpened && (
        <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">
                  Create your car listing
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
                <div className="new-listing-form">
                  <label>Your car brand:</label>
                  <input
                    name="car"
                    type="text"
                    className="form-control"
                    value={carInput.car}
                    onChange={handleInput}
                  ></input>
                  <label>Your car model:</label>
                  <input
                    name="car_model"
                    type="text"
                    className="form-control"
                    value={carInput.car_model}
                    onChange={handleInput}
                  ></input>
                  <label>Your car model year:</label>
                  <input
                    name="car_model_year"
                    type="text"
                    className="form-control"
                    value={carInput.car_model_year}
                    onChange={handleInput}
                  ></input>
                  <label>Your car color:</label>
                  <input
                    name="car_color"
                    type="text"
                    className="form-control"
                    value={carInput.car_color}
                    onChange={handleInput}
                  ></input>
                  <label>Your car price:</label>
                  <input
                    name="price"
                    type="text"
                    className="form-control"
                    value={carInput.price}
                    onChange={handleInput}
                  ></input>
                  <button
                    className="create-btn"
                    onClick={() => {
                      addNewListing(rootStore, carInput);
                      toggleListingWindow();
                    }}
                  >
                    Create
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default observer(NewListing);

import React from "react";
import { observer } from "mobx-react";
import { RootContext } from "../../../Stores/RootStore";
import deleteSingleListing from "../../../Common/services/deleteSingleListingService";
import "./listingsSection.css";

const DeleteButton = (props) => {
  const rootStore = React.useContext(RootContext);
  const carId = props.id;
  return (
    <>
      <button
        className="btn btn-light edit-btn col-4"
        onClick={() => {
          deleteSingleListing(rootStore, carId)
        }}
      >
        <span className="material-symbols-outlined btn-symbol">delete</span>
      </button>
    </>
  )
}

export default observer(DeleteButton);

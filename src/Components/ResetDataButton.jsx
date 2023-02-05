import React from "react";
import axios from "axios";
import { observer } from "mobx-react";
import { PaginationContext } from "../Stores/PaginationStore";
import { DataContext } from "../Stores/DataStore";
import { runInAction } from "mobx";
import { BrowseContext } from "../Stores/BrowseStore";
import { SortingContext } from "../Stores/SortingStore";
import "./ListingsSection.css";

const ResetDataButton = () => {
  const paginationStore = React.useContext(PaginationContext);
  const dataStore = React.useContext(DataContext);
  const browseStore = React.useContext(BrowseContext);
  const sortStore = React.useContext(SortingContext);

  //Search based on all neccessary global store values
  async function resetData() {
    sortStore.resetSortData();
    browseStore.resetBrowseState()
    paginationStore.resetDefaultPage()

    let url = `https://api.baasic.com/beta/new-react-project/resources/car?page=1&rpp=12`;

    let res = await axios.get(url, {
      headers: { "Content-type": "application/json" },
      params: browseStore.params,
    });
    let data = await res.data;
    runInAction(() => {
      dataStore.getFilteredData(data);
    });
    
  }

  return (
    <>
      <button className="btn btn-light ms-5" onClick={resetData}>
        Reset Filters
      </button>
    </>
  );
};

export default observer(ResetDataButton);
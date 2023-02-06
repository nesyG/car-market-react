import React from "react";
import axios from "axios";
import { observer } from "mobx-react";
import { PaginationContext } from "../../../Stores/PaginationStore";
import { DataContext } from "../../../Stores/DataStore";
import { runInAction } from "mobx";
import { FilterContext } from "../../../Stores/BrowseStore";
import { SortingContext } from "../../../Stores/SortingStore";

const MainSearchButton = () => {
  const paginationStore = React.useContext(PaginationContext);
  const dataStore = React.useContext(DataContext);
  const filterStore = React.useContext(FilterContext);
  const sortStore = React.useContext(SortingContext);

  //Search based on all neccessary global store values
  async function handleSortFilterAndPages() {

    paginationStore.resetDefaultPage()
    
    let url = `https://api.baasic.com/beta/new-react-project/resources/car?page=${paginationStore.page}&rpp=12`;

    if (sortStore.sortData) {
      url = url + `&sort=${sortStore.sortData}`;
    }

    let res = await axios.get(url, {
      headers: { "Content-type": "application/json" },
      params: filterStore.params,
    });
    let data = await res.data;
    runInAction(() => {
      dataStore.carData = data;
    });
    console.log(res)   
  }

  return (
    <>
      <button className="btn btn-dark me-5" onClick={handleSortFilterAndPages}>
        Search
      </button>
    </>
  );
};

export default observer(MainSearchButton);

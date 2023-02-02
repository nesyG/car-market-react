import React from "react";
import axios from "axios";
import { PaginationContext } from "../Stores/PaginationStore";
import { DataContext } from "../Stores/DataStore";
import { runInAction } from "mobx";
import { BrowseContext } from "../Stores/BrowseStore";
import { SortingContext } from "../Stores/SortingStore";
import "./ListingsSection.css";

const MainSearchButton = () => {
  const paginationStore = React.useContext(PaginationContext);
  const dataStore = React.useContext(DataContext);
  const browseStore = React.useContext(BrowseContext);
  const sortingStore = React.useContext(SortingContext);

  //Search based on all neccessary global store values
  async function handleSortFilterAndPages() {
    let url = `https://api.baasic.com/beta/new-react-project/resources/car?page=${paginationStore.page}&rpp=12`;

    if (sortingStore.sortData) {
      url = url + `&sort=${sortingStore.sortData}`;
    }

    let res = await axios.get(url, {
      headers: { "Content-type": "application/json" },
      params: browseStore.params,
    });
    let data = await res.data;
    runInAction(() => {
      dataStore.carData = data;
    });
    console.log(res);
  }

  return (
    <>
      <button class="btn btn-dark" onClick={handleSortFilterAndPages}>
        Search
      </button>
    </>
  );
};

export default MainSearchButton;

import React from "react";
import axios from "axios";
import { observer } from "mobx-react";
import { RootContext } from "../../../Stores/RootStore";
import { runInAction } from "mobx";

const MainSearchButton = () => {
  const rootStore = React.useContext(RootContext);
  const { resetDefaultPage, page } = rootStore.paginationStore;
  const { getFilteredData } = rootStore.dataStore;
  const { params } = rootStore.filterStore;
  const { sortData } = rootStore.sortingStore;

  //Search based on all neccessary global store values
  async function handleSortFilterAndPages() {
    resetDefaultPage();

    let url = `https://api.baasic.com/beta/new-react-project/resources/car?page=${page}&rpp=12`;

    if (sortData) {
      url = url + `&sort=${sortData}`;
      console.log(url)
    }

    let res = await axios.get(url, {
      headers: { "Content-type": "application/json" },
      params: params,
    });
    let data = await res.data;
    runInAction(() => {
      getFilteredData(data);
    });
  }

  return (
    <>
      <button className="btn btn-dark me-5 search-button" onClick={handleSortFilterAndPages}>
        Search
      </button>
    </>
  );
};

export default observer(MainSearchButton);

import React from "react";
import axios from "axios";
import { observer } from "mobx-react";
import { RootContext } from "../../../Stores/RootStore";
import { runInAction } from "mobx";

const ResetDataButton = () => {
  const rootStore = React.useContext(RootContext);
  const paginationStore = rootStore.paginationStore;
  const dataStore = rootStore.dataStore;
  const filterStore = rootStore.filterStore;
  const sortingStore= rootStore.sortingStore;

  //Search based on all neccessary global store values
  async function resetData() {
    sortingStore.resetSortData();
    filterStore.resetFilterState();
    paginationStore.resetDefaultPage();

    let url = `https://api.baasic.com/beta/new-react-project/resources/car?page=1&rpp=12`;

    let res = await axios.get(url, {
      headers: { "Content-type": "application/json" },
      params: filterStore.params,
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

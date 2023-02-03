import React from "react";
import { useObserver } from "mobx-react";
import { PaginationContext } from "../Stores/PaginationStore";
import { DataContext } from "../Stores/DataStore";
import "./PageToggleButton.css";

const PageToggleButton = (props) => {
  const paginationStore = React.useContext(PaginationContext);
  const dataStore = React.useContext(DataContext)

  function checkPageData () {
    if (dataStore.carData.item === 0 && paginationStore.page > 1) {
      return
    }
  }

  return useObserver(() => {
    return (
      <div className="pagination-section">
        <button
          class="btn btn-light"
          onClick={() => {
            paginationStore.previousPage();
            props.changePage();
          }}
        >
          Previous Page
        </button>
        <span className="currentPage page-link">{paginationStore.page}</span>
        <button
          class="btn btn-light"
          onClick={() => {
            checkPageData();
            paginationStore.nextPage();
            props.changePage();
          }}
        >
          Next Page
        </button>
      </div>
    );
  });
};

export default PageToggleButton;

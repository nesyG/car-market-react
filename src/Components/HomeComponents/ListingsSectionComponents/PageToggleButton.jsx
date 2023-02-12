import React from "react";
import { observer } from "mobx-react";
import { RootContext } from "../../../Stores/RootStore";
import "./PageToggleButton.css";

const PageToggleButton = (props) => {
  const rootStore = React.useContext(RootContext);
  const paginationStore = rootStore.paginationStore;

  return (
    <div className="pagination-section">
      <button
        className="btn btn-light"
        onClick={() => {
          paginationStore.setPreviousPage();
          props.changePage();
        }}
      >
        Previous Page
      </button>
      <span className="currentPage page-link">{paginationStore.page}</span>
      <button
        className="btn btn-light"
        onClick={() => {
          paginationStore.setNextPage();
          props.changePage();
        }}
      >
        Next Page
      </button>
    </div>
  );
};

export default observer(PageToggleButton);

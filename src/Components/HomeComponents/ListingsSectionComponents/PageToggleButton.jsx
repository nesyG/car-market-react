import React from "react";
import { observer } from "mobx-react";
import { RootContext } from "../../../Stores/RootStore";
import changePages from "../../../Common/services/changePagesService";
import "./pageToggleButton.css";

const PageToggleButton = () => {
  const rootStore = React.useContext(RootContext);
  const {setPreviousPage, setNextPage, page} = rootStore.sortFilterPagingStore;

  return (
    <div className="pagination-section">
      <button
        className="btn btn-light"
        onClick={() => {
          setPreviousPage();
          changePages(rootStore);
        }}
      >
        Previous Page
      </button>
      <span className="currentPage page-link">{page}</span>
      <button
        className="btn btn-light"
        onClick={() => {
          setNextPage();
          changePages(rootStore);
        }}
      >
        Next Page
      </button>
    </div>
  )
}

export default observer(PageToggleButton);

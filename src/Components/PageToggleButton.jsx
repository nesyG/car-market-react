import React from "react";
import { useObserver } from "mobx-react";
import { PaginationContext } from "../Stores/PaginationStore";
import "./PageToggleButton.css";

const PageToggleButton = (props) => {
  const paginationStore = React.useContext(PaginationContext);

  return useObserver(() => {
    return (
      <div className="pagination-section">
        <button onClick={()=> {paginationStore.previousPage(); props.changePage()}}>Previous Page</button>
        <span className="currentPage">{paginationStore.page}</span>
        <button onClick={()=> {paginationStore.nextPage(); props.changePage()}}>Next Page</button>
      </div>
    );
  });
};

export default PageToggleButton;

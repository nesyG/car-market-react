import React from "react";
import { observer } from "mobx-react";
import { RootContext } from "../../../Stores/RootStore"
import handleSortFilterAndPages from "../../../Common/services/sortFilterPageService";

const MainSearchButton = () => {
const rootStore = React.useContext(RootContext);

  return (
    <>
      <button className="btn btn-dark me-5 search-button" onClick={()=>{handleSortFilterAndPages(rootStore)}}>
        Search
      </button>
    </>
  );
};

export default observer(MainSearchButton);


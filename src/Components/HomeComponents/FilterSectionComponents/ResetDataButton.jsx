import React from "react";
import { observer } from "mobx-react";
import { RootContext } from "../../../Stores/RootStore";
import resetData from "../../../Common/services/resetDataService";

const ResetDataButton = () => {
  const rootStore = React.useContext(RootContext);

  return (
    <>
      <button className="btn btn-light ms-5" onClick={()=>{resetData(rootStore)}}>
        Reset Filters
      </button>
    </>
  );
};

export default observer(ResetDataButton);

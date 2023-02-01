import React from "react";
import { useLocalStore } from "mobx-react";

export const BrowseContext = React.createContext();

export const BrowseProvider = ({ children }) => {

  const browseStore = useLocalStore(() => ({
    browsingData: {
      car: "",
      car_model: "",
      car_model_year: "",
      car_color: "",
      //price: "", - needs functionality
    },
    getBrowsingData: (info) => {
      browseStore.browsingData = info;
    },
  }));

  return (
    <BrowseContext.Provider value={browseStore}>
      {children}
    </BrowseContext.Provider>
  );
};

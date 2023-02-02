import React from "react";
import { useLocalStore } from "mobx-react";

export const BrowseContext = React.createContext();

export const BrowseProvider = ({ children }) => {
  const browseStore = useLocalStore(() => ({
    params: {},
    getParams: (data) => {
      browseStore.params = data;
    },
    browsingData: {
      car: "",
      car_model: "",
      car_model_year: "",
      car_color: "",
      //price: "", - needs functionality
    },
    getBrowsingData: (prop, value) => {
      browseStore.browsingData = { ...browseStore.browsingData, [prop]: value };
    },
  }));

  return (
    <BrowseContext.Provider value={browseStore}>
      {children}
    </BrowseContext.Provider>
  );
};

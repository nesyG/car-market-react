import React from "react";
import { useLocalStore } from "mobx-react";
import axios from "axios";
import { runInAction } from "mobx";

export const DataContext = React.createContext();

export const DataProvider = ({ children }) => {
  
  const dataStore = useLocalStore(() => ({
    carData: [],
    getCarData: async (token) => {
      let res = await axios({
        method: "GET",
        headers: {
          Authorization: `bearer ${token}`,
          "Content-Type": "application/json",
        },
        url: "https://api.baasic.com/beta/new-react-project/resources/car?page=1",
      });
      let info = await res.data;
      runInAction(() => {
        dataStore.carData = info;
      });
    },
    getFilteredData: (data) => {
      dataStore.carData = data;
    },
  }));

  return (
    <DataContext.Provider value={dataStore}>{children}</DataContext.Provider>
  );
};

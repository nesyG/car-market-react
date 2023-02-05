import React from "react";
import axios from "axios";
import { makeAutoObservable } from "mobx";
import { runInAction } from "mobx";

export const DataContext = React.createContext();

export const DataProvider = ({ children }) => {
  class DataStore {
    carData = [];
    constructor() {
      makeAutoObservable(this);
    };
    getCarData = async (token) => {
      let res = await axios({
        method: "GET",
        headers: {
          Authorization: `bearer ${token}`,
          "Content-Type": "application/json",
        },
        url: "https://api.baasic.com/beta/new-react-project/resources/car?page=1&rpp=12",
      });
      let info = await res.data;
      runInAction(() => {
        this.carData = info;
      });
    };
    getFilteredData(data) {
      this.carData = data;
    };
  }
  const dataStore = new DataStore();

  return (
    <DataContext.Provider value={dataStore}>{children}</DataContext.Provider>
  );
};

//Example with functions, not preferred according to documentation?

// export const DataProvider = ({ children }) => {
//   const dataStore = useLocalStore(() => ({
//     carData: [],
//     getCarData: async (token) => {
//       let res = await axios({
//         method: "GET",
//         headers: {
//           Authorization: `bearer ${token}`,
//           "Content-Type": "application/json",
//         },
//         url: "https://api.baasic.com/beta/new-react-project/resources/car?page=1&rpp=12",
//       });
//       let info = await res.data;
//       runInAction(() => {
//         dataStore.carData = info;
//       });
//     },
//     getFilteredData: (data) => {
//       dataStore.carData = data;
//     },
//   }));

//   return (
//     <DataContext.Provider value={dataStore}>{children}</DataContext.Provider>
//   );
// };

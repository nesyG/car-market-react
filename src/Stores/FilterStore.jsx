import React from "react";
import { makeAutoObservable } from "mobx";

export const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  class FilterStore {
    params = {};
    filterData = {
      car: "",
      car_model: "",
      car_model_year: "",
      car_color: "",
    };
    constructor() {
      makeAutoObservable(this);
    }

    setParams(data) {
      this.params = data;
    }
    setFilterData(prop, value) {
      this.filterData = { ...this.filterData, [prop]: value };
    }
    resetFilterState() {
      this.filterData = {
        car: "",
        car_model: "",
        car_model_year: "",
        car_color: "",
      };
      this.params = {};
    }
  }
  const filterStore = new FilterStore();

  return (
    <FilterContext.Provider value={filterStore}>
      {children}
    </FilterContext.Provider>
  );
};

//Example with functions, not preferred according to documentation?

// export const BrowseProvider = ({ children }) => {
//   const browseStore = useLocalStore(() => ({
//     params: {},
//     getParams: (data) => {
//       browseStore.params = data;
//     },
//     browsingData: {
//       car: "",
//       car_model: "",
//       car_model_year: "",
//       car_color: "",
//     },
//     getBrowsingData: (prop, value) => {
//       browseStore.browsingData = { ...browseStore.browsingData, [prop]: value };
//     },
//     resetBrowseState: () => {
//       browseStore.browsingData = {
//         car: "",
//       car_model: "",
//       car_model_year: "",
//       car_color: "",
//       };
//       browseStore.params = {}
//     }
//   }));

//   return (
//     <BrowseContext.Provider value={browseStore}>
//       {children}
//     </BrowseContext.Provider>
//   );
// };

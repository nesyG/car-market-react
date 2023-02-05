import React from "react";
import { makeAutoObservable } from "mobx";

export const SortingContext = React.createContext();

export const SortingProvider = ({ children }) => {
  class SortStore {
    sortData = "";
    constructor() {
      makeAutoObservable(this);
    }
    setSortData(info) {
      this.sortData = info;
    }
    resetSortData() {
      this.sortData = "";
    }
  }
  const sortStore = new SortStore();

  return (
    <SortingContext.Provider value={sortStore}>
      {children}
    </SortingContext.Provider>
  );
};

//Example with functions, not preferred according to documentation?

// export const SortingProvider = ({ children }) => {
//   const sortingStore = useLocalStore(() => ({
//     sortData: "",
//     setSortData: (info) => {
//       sortingStore.sortData = info;
//     },
//     resetSortData: () => {
//       sortingStore.sortData = ""
//     }
//   }));

//   return (
//     <SortingContext.Provider value={sortingStore}>
//       {children}
//     </SortingContext.Provider>
//   );
// };

import React from "react";
import { useLocalStore } from "mobx-react";

export const SortingContext = React.createContext();

export const SortingProvider = ({ children }) => {
  const sortingStore = useLocalStore(() => ({
    sortData: "",
    setSortData: (info) => {
      sortingStore.sortData = info;
    },
    resetSortData: () => {
      sortingStore.sortData = ""
    }
  }));

  return (
    <SortingContext.Provider value={sortingStore}>
      {children}
    </SortingContext.Provider>
  );
};

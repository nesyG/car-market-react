import React from "react";
import { useLocalStore } from "mobx-react";

export const PaginationContext = React.createContext();

export const PaginationProvider = ({ children }) => {
  const paginationStore = useLocalStore(() => ({
    page: 1,
    nextPage: () => {
      paginationStore.page += 1;
    },
    previousPage: () => {
      if (paginationStore.page === 1) {
        paginationStore.page = 1;
      } else {
        paginationStore.page -= 1;
      }
    },
  }));

  return (
    <PaginationContext.Provider value={paginationStore}>
      {children}
    </PaginationContext.Provider>
  );
};

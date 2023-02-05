import React from "react";
import { makeAutoObservable } from "mobx";

export const PaginationContext = React.createContext();

export const PaginationProvider = ({ children }) => {
  class PaginationStore {
    page = 1;
    constructor() {
      makeAutoObservable(this);
    }
    setNextPage() {
      this.page += 1;
    }
    setPreviousPage() {
      if (this.page === 1) {
        this.page = 1;
      } else {
        this.page -= 1;
      }
    }
    resetDefaultPage() {
      this.page = 1;
    }
  }
  const paginationStore = new PaginationStore();

  return (
    <PaginationContext.Provider value={paginationStore}>
      {children}
    </PaginationContext.Provider>
  );
};

//Example with functions, not preferred according to documentation?

// export const PaginationProvider = ({ children }) => {
//   const paginationStore = useLocalStore(() => ({
//     page: 1,
//     nextPage: () => {
//         paginationStore.page += 1;
//     },
//     previousPage: () => {
//       if (paginationStore.page === 1) {
//         paginationStore.page = 1;
//       } else {
//         paginationStore.page -= 1;
//       }
//     },
//     resetDefaultPage: () => {
//       paginationStore.page = 1
//     }
//   }));

//   return (
//     <PaginationContext.Provider value={paginationStore}>
//       {children}
//     </PaginationContext.Provider>
//   );
// };

import { makeAutoObservable } from "mobx";

export default class PaginationStore {
  page = 1;
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
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

import { makeAutoObservable } from "mobx";

export default class SortStore {
  sortData = "";
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  setSortData(info) {
    this.sortData = info;
  }

  resetSortData() {
    this.sortData = "";
  }
}

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

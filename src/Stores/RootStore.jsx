import React from "react";
import { makeAutoObservable } from "mobx";
import PaginationStore from "./PaginationStore";
import DataStore from "./DataStore"
import FilterStore from "./FilterStore";
import SortingStore from "./SortingStore"
import TokenStore from "./TokenStore"

export const RootContext = React.createContext();

export const RootProvider = ({ children }) => {
  class RootStore {
    dataStore = DataStore;
    filterStore = FilterStore;
    paginationStore = PaginationStore;
    sortingStore = SortingStore;
    tokenStore = TokenStore

    constructor () {
        this.paginationStore = new PaginationStore(this)
        this.dataStore = new DataStore(this)
        this.filterStore = new FilterStore(this)
        this.sortingStore = new SortingStore(this)
        this.tokenStore = new TokenStore(this)
    }
}
const rootStore = new RootStore();

return (
  <RootContext.Provider value={rootStore}>
    {children}
  </RootContext.Provider>
);
}
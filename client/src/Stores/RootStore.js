import React from "react";
import DataStore from "./DataStore";
import TokenStore from "./TokenStore";
import {SortFilterPagingStore} from "./SortFilterPagingStore"

export const RootContext = React.createContext();

export const RootProvider = ({ children }) => {
  class RootStore {
    dataStore = DataStore;
    tokenStore = TokenStore;
    sortFilterPagingStore = SortFilterPagingStore;

    constructor() {
      this.dataStore = new DataStore(this);
      this.tokenStore = new TokenStore(this);
      this.sortFilterPagingStore = new SortFilterPagingStore(this);
    }
  }
  const rootStore = new RootStore();

  return (
    <RootContext.Provider value={rootStore}>{children}</RootContext.Provider>
  )
}

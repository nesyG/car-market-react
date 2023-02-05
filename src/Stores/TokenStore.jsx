import React from "react";
import { makeAutoObservable } from "mobx";

export const TokenContext = React.createContext();

export const TokenProvider = ({ children }) => {
  class TokenStore {
    token = "";
    constructor() {
      makeAutoObservable(this);
    }
    setToken(token) {
      this.token = token.access_token;
    }
  }
  const tokenStore = new TokenStore();

  return (
    <TokenContext.Provider value={tokenStore}>{children}</TokenContext.Provider>
  );
};

//Example with functions, not preferred according to documentation?

// export const StoreProvider = ({ children }) => {
//   const tokenStore = useLocalStore(() => ({
//     token: "",
//     addToken: (token) => {
//       tokenStore.token = token.access_token;
//     },
//   }));

//   return (
//     <StoreContext.Provider value={tokenStore}>{children}</StoreContext.Provider>
//   );
// };

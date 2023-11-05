import { makeAutoObservable } from "mobx";

export default class TokenStore {
  token = "";
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  setToken(token) {
    this.token = token.access_token;
  }
}

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

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


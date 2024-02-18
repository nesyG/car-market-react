import callCarApi from "../Common/utils/callCarApi";
import { makeAutoObservable } from "mobx";
import { runInAction } from "mobx";

export default class DataStore {
  carData = [];
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  getCarData = async (token) => {
    const query = "?page=1&rpp=12";
    const response = await callCarApi(token, "GET", {}, query, {});
    const info = await response.data;
    runInAction(() => {
      this.carData = info;
    })
  }

  getFilteredData(data) {
    this.carData = data;
  }
}


import { makeAutoObservable } from "mobx";

export  class SortFilterPagingStore {
  page = 1;
  sortData = "";
  params = {};
  filterData = {
    car: "",
    car_model: "",
    car_model_year: "",
    car_color: "",
  };

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

  setSortData(info) {
    this.sortData = info;
  }

  resetSortData() {
    this.sortData = "";
  }

  makeParams() {
    let properties = [];
    for (let key in this.filterData) {
      if (this.filterData[key])
        properties.push(`"${key}"` + "=" + `'${this.filterData[key]}'`);
    }
    let params = {};
    if (properties.length) {
      properties = properties.join("AND");
      params = {
        searchQuery: `WHERE ${properties}`,
      }
    }
    this.params = params;
  }

  setFilterData(prop, value) {
    this.filterData = { ...this.filterData, [prop]: value };
  }

  resetFilterState() {
    this.filterData = {
      car: "",
      car_model: "",
      car_model_year: "",
      car_color: "",
    };
    this.params = {};
  }
}
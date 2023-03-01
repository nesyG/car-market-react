import { makeAutoObservable } from "mobx";

export default class FilterStore {
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
      };
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

//Example with functions, not preferred according to documentation?

// export const BrowseProvider = ({ children }) => {
//   const browseStore = useLocalStore(() => ({
//     params: {},
//     getParams: (data) => {
//       browseStore.params = data;
//     },
//     browsingData: {
//       car: "",
//       car_model: "",
//       car_model_year: "",
//       car_color: "",
//     },
//     getBrowsingData: (prop, value) => {
//       browseStore.browsingData = { ...browseStore.browsingData, [prop]: value };
//     },
//     resetBrowseState: () => {
//       browseStore.browsingData = {
//         car: "",
//       car_model: "",
//       car_model_year: "",
//       car_color: "",
//       };
//       browseStore.params = {}
//     }
//   }));

//   return (
//     <BrowseContext.Provider value={browseStore}>
//       {children}
//     </BrowseContext.Provider>
//   );
// };

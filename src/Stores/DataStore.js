import callApi from "../Common/utils/callApi";
import { makeAutoObservable } from "mobx";
import { runInAction } from "mobx";

export default class DataStore {
  carData = [];
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  getCarData = async (token) => {
    const query = "?page=1&rpp=12";
    const response = await callApi(token, "GET", {}, query, {});
    const info = await response.data;
    runInAction(() => {
      this.carData = info;
    })
  }

  getFilteredData(data) {
    this.carData = data;
  }
}

//Example with functions, not preferred according to documentation?

// export const DataProvider = ({ children }) => {
//   const dataStore = useLocalStore(() => ({
//     carData: [],
//     getCarData: async (token) => {
//       let res = await axios({
//         method: "GET",
//         headers: {
//           Authorization: `bearer ${token}`,
//           "Content-Type": "application/json",
//         },
//         url: "https://api.baasic.com/beta/new-react-project/resources/car?page=1&rpp=12",
//       });
//       let info = await res.data;
//       runInAction(() => {
//         dataStore.carData = info;
//       });
//     },
//     getFilteredData: (data) => {
//       dataStore.carData = data;
//     },
//   }));

//   return (
//     <DataContext.Provider value={dataStore}>{children}</DataContext.Provider>
//   );
// };

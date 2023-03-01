import { runInAction } from "mobx";
import axios from "axios";

export default async function changePages(rootStore) {
    const { setPreviousPage, page } = rootStore.paginationStore;
    const { getFilteredData } = rootStore.dataStore;
    const { params } = rootStore.filterStore;
    const { sortData } = rootStore.sortingStore;
    try {
      let url = `https://api.baasic.com/beta/new-react-project/resources/car?page=${page}&rpp=12`;
  
      if (sortData) {
        url = url + `&sort=${sortData}`;
      }
      let res = await axios.get(url, {
        headers: { "Content-type": "application/json" },
        params: params,
      });
  
      let data = await res.data;
      if (!data.item.length) {
        setPreviousPage();
        return;
      }
  
      runInAction(() => {
        getFilteredData(data);
      });
    } catch (error) {
      console.log(`Your error is: ${error}`);
    }
  }
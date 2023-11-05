import { runInAction } from "mobx";
import callApi from "../utils/callApi";

export default async function handleSortFilterAndPages(rootStore) {
  const { resetDefaultPage, params, sortData  } = rootStore.sortFilterPagingStore;
  const { getFilteredData } = rootStore.dataStore;
  const { token } = rootStore.tokenStore;
  let query = `?page=1&rpp=12`;
  if (sortData) {
    query = query + `&sort=${sortData}`;
  }
  try {
    const result = await callApi(token, "GET", {}, query, params);
    const data = await result.data;
    runInAction(() => {
      getFilteredData(data);
    });
    resetDefaultPage();
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

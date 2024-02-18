import { runInAction } from "mobx";
import callCarApi from "../utils/callCarApi";

export default async function handleSortFilterAndPages(rootStore) {
  const { resetDefaultPage, sortData  } = rootStore.sortFilterPagingStore;
  const { getFilteredData } = rootStore.dataStore;
  const { token } = rootStore.tokenStore;
  const params = rootStore.sortFilterPagingStore.params;
  let query = `?page=1&rpp=12`;
  if (sortData) {
    query = query + `&sort=${sortData}`;
  }
  try {
    console.log(params)
    const result = await callCarApi(token, "GET", {}, query, params);
    const data = await result.data;
    runInAction(() => {
      getFilteredData(data);
    });
    resetDefaultPage();
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

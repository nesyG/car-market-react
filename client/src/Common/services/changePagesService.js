import { runInAction } from "mobx";
import callApi from "../utils/callCarApi";

export default async function changePages(rootStore) {
  const { setPreviousPage, page, params, sortData } = rootStore.sortFilterPagingStore;
  const { getFilteredData } = rootStore.dataStore;
  const { token } = rootStore.tokenStore;

  let query = `?page=${page}&rpp=12`;
  if (sortData) {
    query = query + `&sort=${sortData}`;
  }

  try {
    const response = await callApi(token, "GET", {}, query, params);
    const data = await response.data;
    if (!data.item.length) {
      setPreviousPage();
      return;
    }
    runInAction(() => {
      getFilteredData(data);
    })
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

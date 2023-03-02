import callApi from "../utils/callApi";

export default async function editListing(rootStore, carEditInput, carId) {
  const { token } = rootStore.tokenStore;
  const { getCarData } = rootStore.dataStore;
  const { resetDefaultPage } = rootStore.paginationStore;
  const { resetFilterState } = rootStore.filterStore;
  const { resetSortData } = rootStore.sortingStore;
  const query = `/${carId}`;
  try {
    const res = await callApi(token, "PUT", carEditInput, query, {});
    getCarData(token);
    resetDefaultPage();
    resetFilterState();
    resetSortData();
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

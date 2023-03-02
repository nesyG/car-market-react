import callApi from "../utils/callApi";

export default async function deleteSingleListing(rootStore, carId) {
  const { token } = rootStore.tokenStore;
  const { getCarData } = rootStore.dataStore;
  const { resetDefaultPage } = rootStore.paginationStore;
  const { resetFilterState } = rootStore.filterStore;
  const { resetSortData } = rootStore.sortingStore;
  const query = `/${carId}`;
  try {
    const res = await callApi(token, "DELETE", {}, query, {});
    getCarData(token);
    resetDefaultPage();
    resetFilterState();
    resetSortData();
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

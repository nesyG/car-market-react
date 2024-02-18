import callApi from "../utils/callCarApi";

export default async function deleteSingleListing(rootStore, carId) {
  const { token } = rootStore.tokenStore;
  const { getCarData } = rootStore.dataStore;
  const { resetDefaultPage, resetFilterState, resetSortData } = rootStore.sortFilterPagingStore;
  const query = `/${carId}`;
  try {
    const response = await callApi(token, "DELETE", {}, query, {});
    getCarData(token);
    resetDefaultPage();
    resetFilterState();
    resetSortData();
    if(response.status === 204) {
      alert("You have deleted selected listing!")
    }
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

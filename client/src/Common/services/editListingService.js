import callApi from "../utils/callCarApi";

export default async function editListing(rootStore, carEditInput, carId) {
  const { token } = rootStore.tokenStore;
  const { getCarData } = rootStore.dataStore;
  const { resetDefaultPage, resetFilterState, resetSortData } = rootStore.sortFilterPagingStore;
  const query = `/${carId}`;
  try {
    const response = await callApi(token, "PUT", carEditInput, query, {});
    getCarData(token);
    resetDefaultPage();
    resetFilterState();
    resetSortData();
    if(response.status === 204) {
      alert("You have succesfully edited the listing!")
    }
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

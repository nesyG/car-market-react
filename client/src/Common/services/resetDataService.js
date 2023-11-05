export default async function resetData(rootStore) {
  const { resetDefaultPage, resetFilterState, resetSortData } = rootStore.sortFilterPagingStore;
  const { getCarData } = rootStore.dataStore;
  const { token } = rootStore.tokenStore;
  try {
    resetSortData();
    resetFilterState();
    resetDefaultPage();
    getCarData(token);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

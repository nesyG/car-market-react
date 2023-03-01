export default async function resetData(rootStore) {
  const { resetDefaultPage } = rootStore.paginationStore;
  const { getCarData } = rootStore.dataStore;
  const { resetFilterState } = rootStore.filterStore;
  const { resetSortData } = rootStore.sortingStore;
  const { token } = rootStore.tokenStore;
  try {
    resetSortData();
    resetFilterState();
    resetDefaultPage();
    getCarData(token);
  } catch (error) {
    console.log(`Your error is: ${error}`);
  }
}

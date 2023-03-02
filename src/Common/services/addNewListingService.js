import callApi from "../utils/callApi";

export default async function addNewListing(rootStore, carInput) {
  const { token } = rootStore.tokenStore;
  const { getCarData } = rootStore.dataStore;
  try {
    const response = await callApi(token, "POST", carInput, "", {});
    getCarData(token);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}
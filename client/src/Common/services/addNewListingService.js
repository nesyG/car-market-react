import callCarApi from "../utils/callCarApi";

export default async function addNewListing(rootStore, carInput) {
  const { token } = rootStore.tokenStore;
  const { getCarData } = rootStore.dataStore;
  try {
    const response = await callCarApi(token, "POST", carInput, "", {});
    getCarData(token);
    if(response.status === 201) {
      alert("Your listing has been succesfully created!");
    }
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}
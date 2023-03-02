import carData from "./backup.json";
import { StoreContext } from "../../Stores/TokenStore";
import callApi from "./callApi";

export default function populateDB () {
  //import context for authorization
  const tokenStore = React.useContext(StoreContext);
  const token = tokenStore.token;

  //map through all car objects and add a random date (for later sorting purposes)
  carData.cars.map((car) => {
    function getRandomDate(start, end) {
      return new Date(
        start.getTime() + Math.random() * (end.getTime() - start.getTime())
      )
    }
    const generatedDate = getRandomDate(new Date(2016, 0, 1), new Date());
    let newCar = { ...car, id: car.id.toString() };
    newCar.date_added = generatedDate.toDateString();

    //make post request, add car object to db
    callApi(token, "POST", newCar, "", {});
  })
}

import carData from "./backup.json";
import axios from "axios";
import { StoreContext } from "../../Stores/TokenStore";

function populateDB () {
  //import context for authorization
  const tokenStore = React.useContext(StoreContext);

  //map through all car objects and add a random date (for later sorting purposes)
  carData.cars.map((car) => {
    function getRandomDate(start, end) {
      return new Date(
        start.getTime() + Math.random() * (end.getTime() - start.getTime())
      );
    }
    const generatedDate = getRandomDate(new Date(2016, 0, 1), new Date());
    let newCar = { ...car, id: car.id.toString() };
    newCar.date_added = generatedDate.toDateString();

    //make post request, add car object do db
    let res = axios({
      method: "POST",
      headers: {
        Authorization: `bearer ${tokenStore.token}`,
        "Content-Type": "application/json",
      },
      data: newCar,
      url: "https://api.baasic.com/beta/new-react-project/resources/car",
    }).then((res) => res.data);
    console.log(res);
  });
}

export default populateDB;

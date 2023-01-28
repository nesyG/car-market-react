import carList from "./carsList.json"
import backupCars from "./backup.json"
import axios from "axios";




function populateDB () {

    //map through all car objects and add a random date
    backupCars.cars.map((car)=> {
        function getRandomDate(start,end) {
            return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
        }
        const generatedDate = getRandomDate(new Date(2016, 0, 1), new Date());
        let newCar = {...car, id: car.id.toString()}
        newCar.date_added = generatedDate.toDateString()
        

        //make post request, add car object do db
        let res = axios({
            method: "POST",
            headers: { 
              "Authorization": "bearer 8FCDE70960C427C023044157D1DF6AF9C5E6303A7E5EADC23A8E7EDE28E712F75E6878A788640D291E28721E539D74781BEF6FD335714F46DC1A22EA69D40D7CEA5503F7FD1F24FF7AFBD3F8414DF56C8300F5D8347E7B5F9C9797D9306F540C5C5C9727C38D1186132B5B9D6604402343DCF197013E3068048A1B473B90FC604DF74C1A157EDB34CDF74D5404BFAE74C773086AD5BBAD4963DC37ED932D8A79C8ED706B9056F9DB444EA9C50EBABF4E495C7ABF06108DC58258C994E8F27665",
              "Content-Type": "application/json"
            },
            data: newCar,
            url: "https://api.baasic.com/beta/new-react-project/resources/car",
          }).then(res => res.data)
          console.log(res)  
    })
}

export default populateDB
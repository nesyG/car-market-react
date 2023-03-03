import axios from "axios";

export default async function callApi (token, method,body={},query="",params={}) {
    let url = "https://api.baasic.com/v1/new-react-project/resources/car";
    let contentType = "application/json"

    if(body.password) {
       url = "https://api.baasic.com/v1/new-react-project/login"
       contentType = "application/x-www-form-urlencoded"
    }

    const res = await axios({
        url: url + query,
        method: method,
        headers: {
          Authorization: `bearer ${token}`,
          "Content-Type": contentType,
        },
        params: params,
        data: body
    })
    return res;
}

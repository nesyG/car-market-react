import axios from "axios";

export default async function callImgApi () {
    let url = "https://api.unsplash.com/search/photos?query=cars&client_id=pIgDUaF0Y5hYw2zU8z-my2JvqS_W5Bq3J0g-OWuD44s";
    let contentType = "application/json"

    const res = await axios({
        url: url,
        method: "GET",
    })
    return res;
}

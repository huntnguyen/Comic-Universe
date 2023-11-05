import axios from "axios"

// &format=json
export default axios.create({
    baseURL: "https://comicvine.gamespot.com/api/",
    headers: {
        Authorization: 'Bearer '
    }
});
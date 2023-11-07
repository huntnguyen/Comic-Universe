import axios from "axios"

// &format=json
export default axios.create({
    baseURL: "https://comicvine.gamespot.com/api/",
    headers: {
        Authorization: 'Bearer 3a531bfb45a299035190b4b0860d42972ddd2de8'
    }
});
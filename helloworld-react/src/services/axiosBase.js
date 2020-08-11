import axios from "axios";

const baseAPIURL = process.env.REACT_APP_BASE_API_URL
export const axiosInstance = axios.create({
    baseURL: baseAPIURL, // "http://helloworld.flask/api/v1" 
    timeout: 50000,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json"
    },
    credentials: "same-origin"
});
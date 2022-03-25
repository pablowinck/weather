import axios from "axios";

const api = axios.create({
  baseURL: "https://www.metaweather.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;

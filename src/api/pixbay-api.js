import axios from "axios";

axios.defaults.baseURL = "https://pixabay.com/api";
const KEY = "21043240-eb6fd9f55356396981a7f66ac";

const searchService = {
  page: 1,
  value: "",
};

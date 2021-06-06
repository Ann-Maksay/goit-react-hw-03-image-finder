import axios from "axios";

axios.defaults.baseURL = "https://pixabay.com/api";
axios.defaults.params = { key: "21043240-eb6fd9f55356396981a7f66ac" };

const fetchImg = (value, page) => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${value}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then(({ data }) => data);
};

export default fetchImg;

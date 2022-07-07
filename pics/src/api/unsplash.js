import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID w7Yrlr1VXzHnxDpFCVOBdbDCMkPIiIqUhVM92E6ttJ0",
  },
});

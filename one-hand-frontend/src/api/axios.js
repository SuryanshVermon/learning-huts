import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'https://learning-huts.onrender.com/api/v1'
});

export default axiosInstance;

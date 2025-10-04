import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://fakestoreapi.com",
    withCredentials: false,
})

export default axiosInstance;
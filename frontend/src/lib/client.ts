import axios, { AxiosInstance } from "axios";

const client: AxiosInstance = axios.create({
    withCredentials: true,
    baseURL:
        process.env.VUE_APP_BASE_URL ||
        "http://localhost:BACKEND_PORT_GOES_HERE/api/",
});

export default client;

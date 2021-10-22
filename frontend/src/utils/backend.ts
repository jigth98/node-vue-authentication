import axios from "axios";

export const backend = axios.create({
    withCredentials: true,
    baseURL:
        process.env.VUE_APP_BASE_URL ||
        "http://localhost:BACKEND_PORT_GOES_HERE/api/",
});

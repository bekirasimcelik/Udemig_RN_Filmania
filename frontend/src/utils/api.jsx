import axios from "axios";

const api = axios.create({
    baseURL: "http://127.0.0.1:5005/api",
});

export default api;

import axios from "axios";

const prodUrl = "https://voting-server.onrender.com/api";
const api = axios.create({
  baseURL: prodUrl,
});

export default api;

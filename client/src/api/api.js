import axios from "axios";

const prodUrl = "https://voting-server.onrender.com/api";
const devUrl = "http://localhost:3000/api";
const api = axios.create({
  baseURL: prodUrl,
});

export default api;

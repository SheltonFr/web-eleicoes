import axios from "axios";

const serverUrl = "https://voting-server.onrender.com/api";
// const serverUrl = "http://localhost:3000/api";
const api = axios.create({
  baseURL: serverUrl,
});

export default api;

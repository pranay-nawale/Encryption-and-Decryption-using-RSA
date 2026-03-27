import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:5000"
});

export const getPublicKey = () => API.get("/public-key");

export const sendMessage = (message) =>
  API.post("/send", { message });

export const getMessages = () => API.get("/messages");
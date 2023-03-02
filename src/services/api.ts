import axios from "axios";

const api = axios.create({
  baseURL: "https://hamburgueria-kenzie-v2.herokuapp.com/",
  headers: {
    "Content-Type": "application/json",
  },
});

export { api };

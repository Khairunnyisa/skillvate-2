import axios from "axios";

// const cache = new LRUCache({
//   max: 1000,
//   ttl: 60 * 1000 // set the ttl option to 60 seconds
// });
const token = import.meta.env.VITE_TOKEN_STRAPI;
console.log(token)

export const apiUrl = axios.create({
  baseURL: `http://localhost:1337/`,
  timeout: 60000,
  timeoutErrorMessage: "Network error, please try again",

  headers: {
    "Content-type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});

export const apiWithoutTimeout = axios.create({
  baseURL: `http://localhost:1337/`,
  timeoutErrorMessage: "Network error, please try again",
  headers: {
    "Content-type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});
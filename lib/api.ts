import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      return Promise.reject(error.response.data || error.response.statusText);
    }

    if (error.request) {
      return Promise.reject("Network error. Please try again.");
    }

    return Promise.reject(error.message);
  }
);

export default api;

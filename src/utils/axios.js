import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_SERVER_URL,
  withCredentials: true, // if using cookies
});


API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authAccessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);


export default API;
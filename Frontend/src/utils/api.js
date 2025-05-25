// axios instance
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api/auth', // 🔗 backend base URL
  withCredentials: true // 🟢 allow cookies if used
});

export default API;

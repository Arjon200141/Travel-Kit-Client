import axios from 'axios';

const getToken = () => localStorage.getItem('token');

const axiosInstance = axios.create({
  baseURL: 'https://travel-kit-server.vercel.app',
  headers: {
    'Authorization': `Bearer ${getToken()}`
  }
});

export default axiosInstance;

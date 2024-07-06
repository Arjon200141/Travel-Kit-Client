import axios from 'axios';

const getToken = () => localStorage.getItem('token');

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000',
  headers: {
    'Authorization': `Bearer ${getToken()}`
  }
});

export default axiosInstance;

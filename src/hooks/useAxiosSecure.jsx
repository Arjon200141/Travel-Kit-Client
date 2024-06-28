import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";

const axiosSecure = axios.create({
    baseURL: "http://localhost:5000"
});

const useAxiosSecure = () => {
    const { logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        console.log('Request intercepted');
        return config;
    }, function (error) {
        return Promise.reject(error);
    });

    axiosSecure.interceptors.response.use(function (response) {
        return response;
    }, async (error) => {
        const status = error.response ? error.response.status : null;
        if (status === 401 || status === 403) {
            await logOut();
            navigate('/login');
        }
        console.log('Status Error', status);
        return Promise.reject(error);
    });

    return axiosSecure;
};

export default useAxiosSecure;

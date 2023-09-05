import axios from 'axios';
import { API_URL } from '../config/env';
const token = JSON.parse(localStorage.getItem('auth'))?.token;
const axiosOptions = {
    baseURL: `${API_URL}/api`,
};
if (token)
    axiosOptions.headers = {
        Authorization: `Bearer ${
            JSON.parse(localStorage.getItem('auth')).token
        }`,
    };

export default axios.create(axiosOptions);

import axios from 'axios';

var API_URL = '';

if(process.env.NODE_ENV==='development') {
    API_URL = 'http://localhost:3000';
};

const api = axios.create({
    baseURL: API_URL
});

export default api;
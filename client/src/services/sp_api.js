import axios from 'axios';

const API_URL = 'https://development365.sharepoint.com/sites/develop';
const api = axios.create({
    baseURL: API_URL
});

export const setToken = function(token_type, access_token) {
    api.defaults.headers['Authorization'] = `${token_type} ${access_token}`;
    api.defaults.headers['Accept'] = 'application/json;odata=verbose';
}

export default api;
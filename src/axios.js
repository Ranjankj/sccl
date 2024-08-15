import axios from 'axios';

const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

console.log(apiUrl)

const instance = axios.create({
    baseURL: `${apiUrl}/api`,
});

export default instance;

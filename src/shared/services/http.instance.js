import axios from 'axios';

export const httpInstance = axios.create({
    baseURL: 'http://localhost:5214/',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
});

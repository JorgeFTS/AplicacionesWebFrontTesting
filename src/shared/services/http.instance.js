import axios from 'axios';
import { API_BASE_URL } from '../config/api.config.js';

export const httpInstance = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
});

// URL base del backend, sin "/" al final.
// Se define con VITE_API_BASE_URL (ver .env.example). Por defecto usa el backend local.
export const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL || 'http://localhost:5214').replace(/\/+$/, '');

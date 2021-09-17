import axios from 'axios';

export const api = axios.create({
    baseURL: "https://usebasin.com/f"
});
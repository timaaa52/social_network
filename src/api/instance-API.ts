import axios from "axios";

export const instanceAPI = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true,
    headers: {
        'api-key': '96f35c30-56a0-4da1-befb-610a09072451'
    }
});
import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:8000',
})
export const login = (user_login, user_password) => {
    return apiClient.post('/api/v1/auth/login', {
        user_login,
        user_password
    })
    .then((response) => {
        return response.data;
    })
    .catch((error) => {
        throw error;
    });
}
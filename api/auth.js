import apiClient from "./api";


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
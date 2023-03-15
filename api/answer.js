import apiClient from "./api";

export const getAllAnswers = () => {
    return apiClient.get('/api/v1/answers/get_all/')
    .then((response) => {
        return response.data;
    })
    .catch((error) => {
        throw error;
    });
}

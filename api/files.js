import apiClient from "./api";

export const getFieldsValues = (fileId) => {
    return apiClient.get('/api/v1/files/fields_values/' + fileId)
    .then((response) => {
        return response.data;
    })
    .catch((error) => {
        throw error;
    });
}
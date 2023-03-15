import apiClient from "./api";

export const getFieldsValues = (fileId, data) => {
    return apiClient.post('/api/v1/files/fields_values/', { "file_id": fileId, "data": data })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            throw error;
        });
}


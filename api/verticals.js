import apiClient from "./api";


export const getAllVerticals = () => {
    return apiClient.get('/api/v1/vertical/get_all')
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            throw error;
        });
}


export const getVerticalFields = (vertical) => {
    return apiClient.get('/api/v1/vertical/get/' + vertical)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            throw error;
        });
}




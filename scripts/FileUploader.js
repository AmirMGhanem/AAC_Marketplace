import apiClient from "../api/api.js";


self.addEventListener('message', async (event) => {
    if (event.data instanceof File) {
        const file = event.data;
        let res = await uploadFile(file);
        self.postMessage(res.data); // send the response data back to the component

    }
});

async function uploadFile(file) {
    const formData = new FormData();
    formData.append('file', file);

    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        },
    };
    const response = await apiClient.post('/api/v1/files/uploadfile/', formData, config);

    return response;

}

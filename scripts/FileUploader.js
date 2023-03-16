import apiClient from "../api/api.js";

self.addEventListener('message', async (event) => {
    if (event.data.file instanceof File) {
        const file = event.data.file;
        const headers = event.data.headers;
        let res = await uploadFile(file, headers);
        self.postMessage(res.data); // send the response data back to the component
    }
});
async function uploadFile(file, headers) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('headers', headers);

    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        },
    };
    const response = await apiClient.post('/api/v1/files/uploadfile/', formData, config);

    return response;

}

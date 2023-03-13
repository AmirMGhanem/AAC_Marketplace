
self.addEventListener('message', (event) => {
    if (event.data instanceof File) {
        // Do something with the file, e.g. read its contents
        // const fileReader = new FileReader();
        // fileReader.onload = (e) => {
        //     console.log('File contents:', e.target.result);
        // };
        // fileReader.readAsText(event.data);
        console.log('file passed');
        const file = event.data;
        uploadFile(file);
    }
    
});

async function uploadFile(file) {
    const formData = new FormData();
    formData.append('file', file);

    const xhr = new XMLHttpRequest();
    xhr.upload.addEventListener('progress', (event) => {
        if (event.lengthComputable) {
            postMessage(Math.round((event.loaded / event.total) * 100));
        }
    });

    xhr.open('POST', '/files/uploadfile/');
    xhr.send(formData);
}

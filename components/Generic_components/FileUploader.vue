<template>
    <div class="file-uploader">
        <label for="file">Choose a file:</label>
        <div class="input-wrapper">
            <input type="file" name="file" id="file" class="inputfile" @change="onFileChange" />
            <span class="button">Browse</span>
        </div>

        <div class="file-info">
            <div class="file-name">{{ fileName }}</div>
            <div class="file-size">{{ fileSizeDisplay }}</div>
            <div class="file-type">{{ fileType }}</div>
        </div>

        <v-progress-linear color="dark-blue" model-value="progress" :height="12"></v-progress-linear>
    </div>
</template>

<script>

import FileUploader from 'worker-loader!../../scripts/FileUploader.js'

export default {
    data() {
        return {
            fileName: "",
            fileSize: 0,
            fileType: "",
            fileContent: "",
            progress: 50,

        };
    },
    computed: {
        fileSizeDisplay() {
            const size = this.fileSize;
            const units = ["B", "KB", "MB", "GB", "TB"];

            let index = 0;
            while (size >= 1024 && index < units.length - 1) {
                size /= 1024;
                index++;
            }

            return `${size.toFixed(2)} ${units[index]}`;
        },
    },
    methods: {
        onFileChange(e) {
            const file = e.target.files[0];
            this.fileName = file.name;
            this.fileSize = file.size;
            this.fileType = file.type;
            
            const MyWorker = new FileUploader();

            MyWorker.postMessage(file);
            MyWorker.addEventListener('message', (event) => {
                this.result = event.data;
            });
        },
    },


};
</script>

<style scoped>
.file-uploader {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}

.input-wrapper {
    position: relative;
}

.inputfile {
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
}

.button {
    display: inline-block;
    background-color: #0077cc;
    color: #fff;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    cursor: pointer;
    transition: background-color 0.2s;
}

.button:hover {
    background-color: #005ea6;
}

.file-info {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    font-size: 0.8rem;
    color: #777;
}
</style>
  
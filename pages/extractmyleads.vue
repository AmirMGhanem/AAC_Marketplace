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
export default {
    data() {
        return {
            fileName: "",
            fileSize: 0,
            fileType: "",
            fileContent: "",
            progress: 50
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
            //TODO: WIP: Convert XLSX to CSV
            // if(file.type!="text/csv" && file.type=="text/xslx")
            //     {
            //         file=convertToCSV(file);
            //     }
            const reader = new FileReader();
            reader.onload = (e) => {
                this.fileContent = e.target.result;
            };
            reader.readAsText(file);
        },

        //TODO: WIP: Convert XLSX to CSV
        // convertToCSV(file)
        // {
        //     var reader = new FileReader();
        //     reader.readAsBinaryString(file);
        //     reader.onload = function(event){
        //         var data = event.target.result;
        //         var workbook = XLSX.read(data, {
        //             type: 'binary'
        //         });
        //         workbook.SheetNames.forEach(function(sheetName) {

        //             var XL_row_object = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
        //             var json_object = JSON.stringify(XL_row_object);
        //             console.log(json_object);
        //         })
        //     };
        //     reader.onerror = function(event) {
        //         console.error("File could not be read! Code " + event.target.error.code);
        //     };
        // }
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
  
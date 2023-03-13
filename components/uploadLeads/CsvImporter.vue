<template>
    <div>
        <h4 class="title">File template</h4>
        <div class="scroll" style="overflow: auto;">

            <table class="table">
                <thead>
                    <tr>
                        <th v-for="(header, index) in getAllFields()" :key="index">
                            {{ header.verticalfields_fieldname }}
                        </th>
                    </tr>
                </thead>

            </table>
        </div>
        <div>
            <p class="text-center">Please map the fields in the file to the fields in the template</p>
            <button @click="downloadFile">Click here to download </button>
        </div>
        <input type="file" ref="fileInput" @change="handleFileUpload" />
        <button class="reset-btn" @click="reset">Reset</button>
        <!-- Loading spinner -->
        <div v-if="loading">
            <v-progress-circular indeterminate color="primary"></v-progress-circular>
        </div>
        <div v-show="validfile != null">
            <div v-if="!validfile">
                <p style="color: red;">
                    Invalid file headers. Please check the file headers and try again.
                </p>
            </div>
            <div v-else style="overflow-x:auto;">
                <table class="table">
                    <thead>
                        <tr>
                            <th v-for="(header, index) in getMappedHeaders()" :key="index">
                                {{ header }}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(row, index) in getMappedData()" :key="index">
                            <td v-for="(value, key) in row" :key="key">
                                {{ value }}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    </div>
</template>
<script >
import { parse as csvParse } from "csv-parse";
import { mapGetters, mapMutations, mapActions } from "vuex";
import Papa from 'papaparse'
import FileUploader from 'worker-loader!../../scripts/FileUploader.js'


export default {


    data() {
        return {
            loading: false,
            csvData: null,
            validfile: null,
            result: null,

        };
    },


    methods: {
        ...mapMutations("uploadLeads", [
            "setMappedHeaders",
            "setMappedData"
        ]),
        ...mapMutations("uploadLeads/mapper", [
            "SET_FILE_ID",
        ]),

        ...mapGetters("uploadLeads",
            [
                "getMappedHeaders",
                "getMappedData",
                "getChoosedVertical"
            ]
        ),
        ...mapGetters("uploadLeads/mapper", [
            "getAllFields",

        ]),


        reset() {
            this.csvData = null;
            this.setMappedHeaders([]);
            this.setMappedData([]);
            this.$refs.fileInput.value = "";
            this.loading = false;
        },

        handleFileUpload() {
            this.loading = true;
            const file = this.$refs.fileInput.files[0];
            if (!file) {
                return;
            }
            const reader = new FileReader();
            reader.addEventListener(
                "load",
                () => {
                    this.csvData = reader.result;
                    const data = this.parseCsvData();
                },
                false
            );
            if (file) {
                // file to blob
                let blob = new Blob([file], { type: "text/csv" });
                let res = reader.readAsText(blob);
            }
        },
        parseCsvData() {
            csvParse(this.csvData, { from: 1, to: 10 }, (err, data) => {
                if (err) {
                    console.error(err);
                } else {
                    this.mapData(data);
                }
            });

        },
        mapData(data) {
            const headers = data.slice(0, 1)[0];
            const mappedData = data.slice(1).map(row => {
                return row.reduce((data, value, index) => {
                    data[headers[index]] = value;
                    return data;
                }, {});
            });
            this.setMappedHeaders(headers);
            this.validateHeaders();
            if (this.validfile) {
                this.setMappedData(mappedData);
                this.loading = false;
                // get file from input
                const file = this.$refs.fileInput.files[0];
                const MyWorker = new FileUploader();
                MyWorker.onmessage = (e) => {
                    this.result = e.data.id;
                    this.SET_FILE_ID(this.result);

                }
                MyWorker.postMessage(file);
                
            }
            else {
                this.loading = false;
                this.reset();
            }



        },
        validateHeaders() {
            const originalHeaders = this.getAllFields().map(
                field => field.verticalfields_fieldname
            );
            const mappedHeaders = this.getMappedHeaders();
            if (mappedHeaders.length !== originalHeaders.length) {
                this.validfile = false;
                return;
            }
            for (let i = 0; i < originalHeaders.length; i++) {
                if (originalHeaders[i] !== mappedHeaders[i]) {
                    this.validfile = false;
                    return;
                }
            }
            this.validfile = true;
        },
        downloadFile() {
            const headers = this.getAllFields().map(
                field => field.verticalfields_fieldname
            );
            const csv = Papa.unparse([headers])
            const blob = new Blob([csv], { type: 'text/csv' })
            const link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download = 'template_' + this.getChoosedVertical() + '.csv';
            link.click();

        }
    }
};
</script>
<style scopeds>
.title {
    margin-bottom: 30px;
}

.reset-btn {
    background-color: #f44336;
    color: white;
    padding: 8px 16px;
    font-size: 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 20px;
    margin-bottom: 20px;
}

.reset-btn:hover {
    background-color: #d32f2f;
}

.table {
    border-collapse: collapse;
    width: 100%;
}

.table th,
.table td {
    border: 1px solid #ddd;
    padding: 8px;
}

.table th {
    background-color: #f2f2f2;
    text-align: left;
    font-weight: bold;
}

.table tr:hover {
    background-color: #f5f5f5;
}

tr:nth-child(even) {
    background-color: #f2f2f2;
}

input[type="file"] {
    margin-bottom: 16px;
}
</style>
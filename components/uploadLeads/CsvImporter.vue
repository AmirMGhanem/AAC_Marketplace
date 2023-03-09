<template>
    <div>

        <input type="file" ref="fileInput" @change="handleFileUpload" />
        <button class="reset-btn" @click="reset">Reset</button>
        <!-- Loading spinner -->
        <div v-if="loading">
            <v-progress-circular indeterminate color="primary"></v-progress-circular>
        </div>

        <div style="overflow-x:auto;">
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
</template>
<script>
import { parse as csvParse } from "csv-parse";
import { mapGetters, mapMutations, mapActions } from "vuex";


export default {


    data() {
        return {
            loading: false,
            csvData: null,
        };
    },


    methods: {
        ...mapMutations("uploadLeads", [
            "setMappedHeaders",
            "setMappedData"
        ]),

        ...mapGetters("uploadLeads",
            [
                "getMappedHeaders",
                "getMappedData"
            ]
        ),
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
            this.setMappedData(mappedData);
            this.loading = false;
        }
    }
};
</script>
<style scopeds>
.reset-btn {
    background-color: #f44336;
    color: white;
    padding: 8px 16px;
    font-size: 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
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
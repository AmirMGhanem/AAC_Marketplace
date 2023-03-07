<template>
    <div>
        <input type="file" ref="fileInput" @change="handleFileUpload" />
        <table>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(row, index) in mappedData" :key="index">
                    <td>{{ row.firstName }}</td>
                    <td>{{ row.lastName }}</td>
                    <td>{{ row.email }}</td>
                    <td>{{ row.phone }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
  
<script>
import { parse as csvParse } from "csv-parse";
import Papa from "papaparse";

export default {
    data() {
        return {
            csvData: null,
            mappedData: []
        };
    },
    methods: {
        handleFileUpload() {
            const file = this.$refs.fileInput.files[0];
            if (!file) {
                return;
            }
            const reader = new FileReader();
            reader.onload = () => {
                this.csvData = reader.result;
                this.parseCsvData();
            };
            reader.readAsText(file);
        },
        parseCsvData() {
            csvParse(this.csvData, (err, data) => {
                if (err) {
                    console.error(err);
                } else {
                    this.mapData(data);
                }
            });
        },
        mapData(data) {
            this.mappedData = Papa.parse(data, {
                header: true,
                dynamicTyping: true
            }).data;
        }
    }
};
</script>
  
<style scoped></style>
  
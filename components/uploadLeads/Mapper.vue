<template>
    <div class="container">
            <table>
                <tbody>
                    <tr>
                        <div v-for="(field, index) in  getAllFields" :key="index" class="input-group">
                            <td>
                                <label :for="'select-' + field.verticalfields_id" class="label">{{
                                    field.verticalfields_fieldname
                                }}</label>
                                <select class="input" :id="'select-' + field.verticalfields_id">
                                    <option v-for="(header, index) in getMappedHeaders" :key="index">{{ header }}</option>
                                </select>
                            </td>
                        </div>
                    </tr>
                </tbody>
            </table>

    </div>
</template>
<script>
import { mapGetters,mapMutations} from 'vuex';

export default {
    data() {
        return {
            prev: false,
        };
    },
    computed: {
        ...mapGetters("uploadLeads/mapper", [
            "getAllFields"
        ]),

        ...mapGetters("uploadLeads",
            [
                "getMappedHeaders",
                "getMappedData"
            ]),
    },
    methods: {
        ...mapMutations("uploadLeads/mapper", [
            "SET_MAPPED_FIELDS",
        ]),
        MapFields() {

            let data = {};
            const fields = this.getAllFields;

            for (let i = 0; i < fields.length; i++) {
                const fieldName = fields[i].verticalfields_fieldname;
                const selectElement = document.getElementById(`select-${fields[i].verticalfields_id}`);
                const selectedOption = selectElement.options[selectElement.selectedIndex].value;
                data[fieldName] = selectedOption;
            }
            // Data object now contains the selected options as key-value pairs
            console.table(data);
            this.SET_MAPPED_FIELDS(data);
            this.prev = true;
        },

    }
}
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.input-group {
    display: flex;
    /* flex-direction: column; */
    align-items: flex-start;
    margin-bottom: 16px;
}

.label {
    text-align: center;
    font-weight: bold;
    margin-bottom: 4px;
}

.input {
    width: 100%;
    height: 40px;
    border: 1px solid #474747;
    border-radius: 4px;
    box-sizing: border-box;
    padding: 8px;
    text-align: center;
    font-size: larger;
}

.submit {

    background-color: #4CAF50;
    color: white;
    padding: 8px 16px;
    font-size: 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

/* .table {
    overflow-x:auto;
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
} */
</style>
  
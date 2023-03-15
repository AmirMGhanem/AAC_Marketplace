<template>
    <div>
        <h1>
            Value Mapper
        </h1>


        <div v-for="field, index in getFileFieldsValues" :key="index">
            <b-button v-b-toggle="'collapse-2' + index" class="m-1">{{ index
            }}</b-button>
            <b-collapse :id="'collapse-2' + index">
                <b-card>
                    <table class="table">
                        <thead>
                            <tr>
                                <th>File Fields</th>
                                <th>Values Needed</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="f in field" :key="f">
                                <td>
                                    {{ f }}
                                </td>
                                <td>
                                    <select>
                                        <option value="">Select</option>
                                        <option v-for="fields in getFieldsAnswer(index)" :key="fields.answer_id">{{ fields.answer_verticalfield_answer }}</option>
                                    </select>
                                </td>
                            </tr>
                        </tbody>

                    </table>

                </b-card>
            </b-collapse>
        </div>

    </div>
</template>

<script >
import { mapActions, mapGetters } from 'vuex';
export default {
    data() {
        return {

        };
    },
    computed: {
        ...mapGetters("uploadLeads/mapper", [
            "getFileId",
            "getMappedFields",
            "getFileFieldsValues",
            "getAllFields",

        ]),
    },
    methods: {
        ...mapActions("uploadLeads/mapper", [
            "getDataFromFile"
        ]),
        getFieldsAnswer(field) {
            const allfields = this.getAllFields;
            const mapped = this.getMappedFields;
            const mappedField = Object.keys(mapped).find(key => mapped[key] === field);
            const filteredResults = allfields
                .filter((item) => item.verticalfields_fieldname === mappedField)
                .map((item) => item.answers);
            return filteredResults.length > 0 ? filteredResults[0] : [];
        },
        MapValues() {
            this.getDataFromFile({ fileId: this.getFileId, mappedHeaders: this.getMappedFields });
        }
    },
}
</script>

<style  scoped>

.m-1 {
    background-color: #5b5b5b;

    color: #ffffff;
    font-weight: bold;
    font-size: 20px;
    border-radius: 5px;
    border: 0.5px;
}

select {
    appearance: listbox;
    height: 100%;
    border: 1px solid #474747;
    border-radius: 4px;
    box-sizing: border-box;
    padding: 8px;
    text-align: center;
    font-size: larger;
}

select::after {
    /* Use the icon font */
    font-family: 'Font Awesome 5 Free';
    content: '\f107';
    /* Replace with the icon code */
    position: absolute;
    top: 50%;
    right: 8px;
    transform: translateY(-50%);
}

.table {
    border-collapse: collapse;
    width: 100%;
}

.table th,
.table td {
    border: 2px solid #686767;
    border-radius: 5px;
    padding: 8px;
}

.table th {
    background-color: #FFB727;
    text-align: left;
    font-weight: bold;
}

.table tr:hover {
    background-color: #f5f5f5;
}

tr:nth-child(even) {
    background-color: #ffb72742;
}

th {
    text-align: center;
    font-weight: bold;
    font-size: 28px;

}
</style>
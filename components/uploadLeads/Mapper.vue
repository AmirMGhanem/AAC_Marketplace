<template>
    <div class="container">
        <h4 class="title">Headers Mapper</h4>
        <table class="table">
            <thead>
                <tr>
                    <th>AAC Fields</th>
                    <!-- <th>Function </th> -->
                    <th>Your File Fields</th>
                </tr>

            </thead>
            <tbody>
                <tr v-for="(field, index) in  getAllFields" :key="index">
                    <td> <label :for="'select-' + field.verticalfields_id" class="label">{{
                        field.verticalfields_fieldname
                    }}</label></td>
                    <!-- <td>FUNC</td> -->
                    <td>
                        <select class="input" :id="'select-' + field.verticalfields_id">
                            <option value="">Select</option>
                            <option v-for="(header, index) in getMappedHeaders" :key="index">{{ header }}</option>
                        </select>
                    </td>
                </tr>

            </tbody>
        </table>





    </div>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';

export default {
    data() {
        return {
            
        };
    },
    computed: {
        ...mapGetters("uploadLeads/mapper", [
            "getAllFields",
            "getFileId"
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
            console.table(data);
            this.SET_MAPPED_FIELDS(data);
        },

    }
}
</script>

<style scoped>
select{
    appearance: listbox ;
}

.title{
    margin-bottom: 30px;
}

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.input-group {
    display: flex;
    /* align-items: flex-start; */
    margin-bottom: 16px;
}

.label {
    text-align: center;
    font-weight: bold;
    margin-bottom: 4px;
}

.input {

    height: 100%;
    border: 1px solid #474747;
    border-radius: 4px;
    box-sizing: border-box;
    padding: 8px;
    text-align: center;
    font-size: larger;
}
.input::after {
    /* Use the icon font */
    font-family: 'Font Awesome 5 Free';
    content: '\f107'; /* Replace with the icon code */
    position: absolute;
    top: 50%;
    right: 8px;
    transform: translateY(-50%);
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
th{
    text-align: center;
    font-weight: bold;
    font-size: 28px;

}
</style>
  
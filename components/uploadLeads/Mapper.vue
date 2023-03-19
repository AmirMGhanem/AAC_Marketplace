<template>
    <div class="container">
        <h4 class="title">Headers Mapper</h4>
        <table class="table">
            <thead>
                <tr>
                    <th>AAC Fields</th>
                    <!-- <th>Function </th> -->
                    <th>Your File Fields</th>
                    <th>
                        Validation
                    </th>
                </tr>


            </thead>
            <tbody>
                <tr v-for="(field, index) in  getAllFields" :key="index">
                    <td> <label :for="'select-' + field.verticalfields_id" class="label">{{
                        field.verticalfields_fieldname
                    }} <span :id="'required'">{{ field.verticalfields_mandatory == 1 ? ' *' : '' }}</span></label>
                    </td>
                    <!-- <td>FUNC</td> -->
                    <td>
                        <select class="input" :id="'select-' + field.verticalfields_id"
                            :required="field.verticalfields_mandatory == 1">
                            <option value="">Select</option>
                            <option v-for="(header, index) in getMappedHeaders" :key="index"
                                :selected="header == getPredictedFields[field.verticalfields_fieldname]">{{ header }}
                            </option>
                        </select>
                        <p class="example"> Example : {{ field.verticalfields_example }}</p>
                    </td>
                    <td>
                        <div :id="'validation' + field.verticalfields_id">
                            <p>File values : {{}}</p>
                            <p>Validation : {{validateData()}}</p>
                        </div>
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
            "getPredictedFields"

        ]),



        ...mapGetters("uploadLeads",
            [
                "getMappedHeaders",
                "getMappedData",
            ]),

    },
    methods: {
        ...mapMutations("uploadLeads/mapper", [
            "SET_MAPPED_FIELDS",
        ]),
        validateData(){

        },


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
        validateRequired() {
            const fields = this.getAllFields;
            for (let i = 0; i < fields.length; i++) {
                const fieldName = fields[i].verticalfields_fieldname;
                const selectElement = document.getElementById(`select-${fields[i].verticalfields_id}`);
                const selectedOption = selectElement.options[selectElement.selectedIndex].value;
                if (selectedOption == "" && fields[i].verticalfields_mandatory == 1) {
                    return false;
                }
            }
            return true;
        },

    },
    // watch: {
    //     validationMessages: {
    //         handler(newMessages) {
    //             for (const field of this.getAllFields) {
    //                 const id = field.verticalfields_id;
    //                 if (newMessages[id] === 'Invalid value') {
    //                     this.$el.querySelector(`#select-${id}`).classList.add('is-danger');
    //                 } else {
    //                     this.$el.querySelector(`#select-${id}`).classList.remove('is-danger');
    //                 }
    //             }
    //         },
    //         deep: true,
    //     },
    // },
}
</script>

<style scoped>
.example {
    font-size: 12px;
    color: #474747;
}

select {
    appearance: listbox;
}

.title {
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


#required {
    color: red;
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
    content: '\f107';
    /* Replace with the icon code */
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

th {
    text-align: center;
    font-weight: bold;
    font-size: 28px;

}
</style>
  
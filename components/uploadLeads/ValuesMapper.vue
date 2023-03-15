<template>
    <div>

        <h1>Values mapper</h1>
        <div>

            <div v-for="field in getAllFields" :key="verticalfields_id">
                <b-button v-b-toggle="'collapse-2' + field.verticalfields_id" class="m-1">{{ field.verticalfields_fieldname
                }}</b-button>
                <b-collapse :id="'collapse-2' + field.verticalfields_id">
                    <b-card>

                        <div v-if="field.answers.length > 0">
                            <div>
                                <select>
                                    <option value="">Select</option>
                                    <option v-for="answer in field.answers" :key="answer_id" :value="answer.answer_id">
                                        {{ answer.answer_verticalfield_answer }}
                                    </option>
                                </select>
                            </div>
                        </div>


                        <div v-else>
                            Pattern :
                            {{ field.verticalfields_pattern }}
                        </div>

                        <div v-for="value, key in getFileFieldsValues" :key="key">
                            <div v-if="key == field.verticalfields_fieldname">
                                {{ key }} : {{ value }}
                            </div>
                        </div>



                    </b-card>
                </b-collapse>
            </div>


        </div>
    </div>
</template>

<script >
import { mapGetters, mapActions } from 'vuex'
export default {
    data() {
        return {

        }
    },
    computed: {
        ...mapGetters("uploadLeads/mapper", [
            "getFileId",
            "getFileFieldsValues",
            "getAllFields",
            

        ]),
    },
    methods: {
        ...mapActions("uploadLeads/mapper", [
            "fetchFieldsValues",
        ]),
        fetchValues() {
            this.fetchFieldsValues(this.getFileId);

        },
    },



}
</script>

<style  scoped>

select{
    appearance: listbox ;
    height: 100%;
border: 1px solid #474747;
border-radius: 4px;
box-sizing: border-box;
padding: 8px;
text-align: center;
font-size: larger;
}

select::after{
    /* Use the icon font */
font-family: 'Font Awesome 5 Free';
content: '\f107'; /* Replace with the icon code */
position: absolute;
top: 50%;
right: 8px;
transform: translateY(-50%);
}


</style>
export const state = () => ({
    fields: [],
    file_id: null,
    mapped_fields: [],
    file_fields_values: [],

});
export const mutations = {
    SET_FIELDS(state, fields) {
        state.fields = fields;
    },

    SET_FILE_ID(state, file_id) {
        state.file_id = file_id;
    },
    SET_MAPPED_FIELDS(state, mapped_fields) {
        state.mapped_fields = mapped_fields;
    },
    SET_FILE_FIELDS_VALUES(state, file_fields_values) {
        state.file_fields_values = file_fields_values;
    },

};
export const getters = {

    getAllFields: (state) => {
        return state.fields;
    },
    getFileId: (state) => {
        return state.file_id;
    },
    getFileFieldsValues: (state) => {
        return state.file_fields_values;
    },

    getMappedFields: (state) => {
        return state.mapped_fields;
    }

};

import { getVerticalFields } from "../../api/verticals";
import { getFieldsValues } from "../../api/files";

export const actions = {
    async fetchAllFields({ commit }, vertical) {
        try {
            const fields = await getVerticalFields(vertical);
            commit('SET_FIELDS', fields);
        } catch (error) {
        }
    },

    async getDataFromFile({ commit }, { fileId, mappedHeaders }) {

        try {

            const fieldsValues = await getFieldsValues(fileId, mappedHeaders);
            commit('SET_FILE_FIELDS_VALUES', fieldsValues);

        } catch (error) {
        }
    }



    // async fetchFieldsValues({commit},fileId,mappedHeaders){
    //     try {
    //         const fieldsValues = await getFieldsValues(fileId,mappedHeaders);
    //         commit('SET_FILE_FIELDS_VALUES', fieldsValues);
    //     } catch (error) {
    //     }
    // },
};

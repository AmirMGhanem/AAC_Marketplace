export const state = () => ({
    fields: [],
    mappedFields: [],


});



export const mutations = {
    SET_FIELDS(state, fields) {
        state.fields = fields;
    },
    SET_MAPPED_FIELDS(state, mappedFields) {
        state.mappedFields = mappedFields;
    }


};


export const getters = {


    getAllFields: (state) => {

        return state.fields;
    },

    getFields: (state) => (category) => {
        for (var key in state.fields) {
            
            if (key == category) {
                return state.fields[key];
            }
        }
    },
    getMappedFields: (state) => {
        return state.mappedFields;
    },



};

import { getVerticalFields } from "../../api/verticals";
export const actions = {
    async fetchAllFields({ commit },vertical) {
        try {
            const fields = await getVerticalFields(vertical);
            commit('SET_FIELDS', fields);

        } catch (error) {

        }
    }

};

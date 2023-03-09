export const state = () => ({

    "fields": {
        "Home_improvement": [
            "adresse",
            "ville",
            "commentaire",
            "custom_partnerid",
            "email",
            "prenom",
            "ip",
            "language",
            "nom",
            "complement",
            "complement",
            "sub_m",
            "complement",
            "complement",
            "telephone",
            "complement",
            "complement",
            "zipcode",
            "adresse",
            "ville",
            "commentaire",
            "custom_partnerid",
            "email",
            "prenom",
            "ip",
            "nom",
            "complement",
            "complement",
            "sub_m",
            "complement",
            "complement",
            "telephone",
            "complement",
            "complement",
            "zipcode",
            "adresse",
            "ville",
            "commentaire",
            "custom_partnerid",
            "email",
            "prenom",
            "complement",
            "ip",
            "nom",
            "complement",
            "complement",
            "complement",
            "complement",
            "complement",
            "sub_m",
            "complement",
            "complement",
            "telephone",
            "complement",
            "complement",
            "complement",
            "complement",
            "zipcode"
        ],
        "Education": [
            "adresse",
            "ville",
            "commentaire",
            "custom_partnerid",
            "email",
            "prenom",
            "ip",
            "language"
        ],
    },
    "HomeTitle": ["Welcome To Adopt A Contractor Top Leads Marketplace",
        "We are a top lead marketplace for customers and contractors to connect and get the job done right the first time."],




});



export const mutations = {
    SET_FIELDS(state, fields) {
        state.fields = fields;
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
    getHomeTitle(state) {
        return state.HomeTitle;
    },

    getHomeTitleByIndex: (state) => (index) => {
        return state.HomeTitle[index];
    }



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

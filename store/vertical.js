
export const state = () => ({
    verticals: [],

});

export const mutations = {
    SET_VERTICALS(state, verticals) {
        state.verticals = verticals;
    }
};


export const getters = {

    GetVerticals(state) {
        return state.verticals.map((vertical) => ({
            id: vertical.vertical_id,
            name: vertical.vertical_name
        }));
    }
};


import { getAllVerticals } from "../api/verticals";
export const actions = {
    async fetchAllVerticals({ commit }) {
        try {
                const verticals = await getAllVerticals();
                commit('SET_VERTICALS', verticals);
            
        } catch (error) {

        }
    },
};

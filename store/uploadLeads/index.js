export const state = () => ({
    mappedData: [],
    mappedHeaders: [],
});


export const mutations = {

    setMappedData(state, data) {
        state.mappedData = data;
    },

    setMappedHeaders(state, data) {
        state.mappedHeaders = data; 
    },
};

export const getters = {
    getMappedData: (state) => {
        return state.mappedData;
    },

    getMappedHeaders: (state) => {
        return state.mappedHeaders;
    }


};


export const actions = {

};

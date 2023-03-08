export const state = () => ({
    mappedData: [],
    mappedHeaders: [],
    choosedVertical:'',
});


export const mutations = {

    setMappedData(state, data) {
        state.mappedData = data;
    },

    setMappedHeaders(state, data) {
        state.mappedHeaders = data; 
    },
    setChoosedVertical(state, data) {
        state.choosedVertical = data; 
    }
};

export const getters = {
    getMappedData: (state) => {
        return state.mappedData;
    },

    getMappedHeaders: (state) => {
        return state.mappedHeaders;
    },
    getChoosedVertical: (state) => {
        return state.choosedVertical;
    }


};


export const actions = {

};

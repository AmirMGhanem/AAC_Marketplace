
// Example of how to use vuex store in nuxt project
export const state = () => ({
    "HomeTitle": "Welcome To Adopt A Contractor Top Leads Marketplace",
    "Home": {
        "Title": "Welcome To Adopt A Contractor Top Leads Marketplace",
        "SubTitle": ["111We are a top lead marketplace for customers and contractors to connect and get the job done right the first time.",
            "We are a top lead marketplace for customers and contractors to connect and get the job done right the first time.",],
    },
    token: '',
    user: "sad"
});

export const mutations = {
    setToken(state, token) {
        state.token = token
    },
    setUserData(state, user) {
        state.user = user
    },
    logout(state) {
        state.token = ''
        state.user = null
    }
}

export const getters = {
    isAuthenticated(state) {
        return !!state.token
    },
    getUser(state) {
        return state.user
    },
    GetSubTitle: (state) => (index) => {
        return state.Home.SubTitle[index];
    }
}


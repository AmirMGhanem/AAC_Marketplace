
// Example of how to use vuex store in nuxt project



export const state = () => ({

    "HomeTitle": "Welcome To Adopt A Contractor Top Leads Marketplace",
    "Home": {
        "Title": "Welcome To Adopt A Contractor Top Leads Marketplace",
        "SubTitle": ["111We are a top lead marketplace for customers and contractors to connect and get the job done right the first time.",
            "222We are a top lead marketplace for customers and contractors to connect and get the job done right the first time.",],
    }

});

export const getters = {
    GetSubTitle: (state) => (index) => {
        return state.Home.SubTitle[index];
    }
}
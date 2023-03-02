<template>
    <div>
        <b-navbar toggleable="lg" type="light" variant="warning">
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <nuxt-link to="/"><img src="~assets/images/logo.png" alt="adopt-a-contractor" class="logo"></nuxt-link>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="auto">
                    <b-nav-item-dropdown>
                        <template #button-content>
                            <em>My Leads</em>
                        </template>
                        <b-dropdown-item to="/uploadLeads">Upload Leads</b-dropdown-item>
                        <b-dropdown-item to="/managemyleads">Manage My Leads</b-dropdown-item>
                        <b-dropdown-item to="/previoussearch">Previous Search</b-dropdown-item>
                        <b-dropdown-item to="/extractmyleads">Extract my leads</b-dropdown-item>
                        <b-dropdown-item to="/leadsenrichment">Leads enrichment</b-dropdown-item>
                        <b-dropdown-item to="/leandsmonetization">Leads monetization</b-dropdown-item>
                    </b-nav-item-dropdown>

                </b-navbar-nav>
                <b-navbar-nav>
                    <b-nav-item href="/myleads">My Leads</b-nav-item>
                    <b-nav-item href="/sellleads">Sell Leads</b-nav-item>
                    <b-nav-item href="/buyleads">Buy Leads</b-nav-item>
                </b-navbar-nav>
                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-item-dropdown right>
                        <!-- Using 'button-content' slot -->
                        <template #button-content>
                            <em>My Account</em>
                        </template>
                        <div v-if="user">
                            <b-dropdown-item to="/profile">Profile</b-dropdown-item>
                            <b-dropdown-item @click="logout">Logout</b-dropdown-item>
                        </div>
                        <div v-else>
                            <b-dropdown-item to="/signin">Sign in</b-dropdown-item>
                        </div>

                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
export default {
    methods: {
        logout() {
            this.$store.commit('logout')
        }
    },
    computed: {
        user() {
            return this.$store.state.user
        }
    }

}
</script>

<style  scoped>

.logo {
    width: 120px;
    height: 60px;
}
</style>
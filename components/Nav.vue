<template>
    <div>
        <b-navbar toggleable="lg" type="light" variant="warning">
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <nuxt-link to="/"><img src="~assets/images/logo.png" alt="adopt-a-contractor" class="logo"></nuxt-link>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item href="/marketplace">Marketplace</b-nav-item>
                    <b-nav-item href="/buy" >Buy Leads</b-nav-item>
                    <b-nav-item href="/sell" >Sell Leads</b-nav-item>
                </b-navbar-nav>
                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-item-dropdown right>
                        <!-- Using 'button-content' slot -->
                        <template #button-content>
                            <em>User</em>
                        </template>
                        <b-dropdown-item to="/signin">Profile</b-dropdown-item>
                        
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
export default {
    
}
</script>

<style  scoped>
.logo{
        width: 120px;
        height: 60px;
    }
</style>
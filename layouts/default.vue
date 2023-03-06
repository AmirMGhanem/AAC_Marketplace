
<template>
    <div>
        <Nav />
        <div v-if="$auth.loggedIn">

            <Nuxt />
        </div>
        <div v-else>
            <h1>Not logged in</h1>
        </div>
    </div>


    
</template>

<script>
export default {

}
</script>

<style  scoped></style>
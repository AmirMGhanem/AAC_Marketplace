
<template>
    <div>
        <Nav />
        <div v-if="user">
            <Nuxt />
        </div>
        <div v-else>
            <h1>Not logged in</h1>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        user() {
            return this.$store.state.user
        }
    }

}
</script>

<style  scoped></style>
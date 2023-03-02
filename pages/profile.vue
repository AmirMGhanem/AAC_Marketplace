<template>
    <div>
        <h1 v-if="user">Hello {{ user?.user_name }}</h1>
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

<style scoped>

</style>
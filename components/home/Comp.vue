<template>
    <div class="container">
        <h1>Hello {{ user.user_name }}</h1>
        <h4>{{ HomeTitle }}</h4>
        <p>{{ Title }}</p>

    </div>
</template>

<script>
export default {
    computed: {
        HomeTitle() {
            return this.$store.state.HomeTitle
        },
        Title() {
            return this.$store.getters.GetSubTitle(1)
        },
        user() {
            return this.$store.state.user
        }
    }
}
</script>

<style scoped></style>
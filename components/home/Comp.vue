<template>
    <div class="container">
        <h1>{{ HomeTitle }}</h1>
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
            
    }
}
</script>

<style scoped></style>
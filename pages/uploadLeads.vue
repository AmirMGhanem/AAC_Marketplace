<template>
    <div class="container">
        <Stepper :title="title" :steps_list="steps_list" />

    </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'Upload File',
            steps_list: ["1", "2", "3", "4"],

        }
    }



}
</script>

<style scoped>
.container {
    margin-top: 100px;
}
</style>
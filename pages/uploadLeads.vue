<template>
    <div class="container">
        <Stepper :title="title" :steps_list="steps_list" />
        <!-- <RightBottom-popup :progress="50" :fileName="'sadas'"/> -->
        
    </div>
</template>


<script >
export default {
    data() {
        return {
            title: 'Upload File',
            steps_list: ["1", "2", "3", "4"],

        }
    },
    props: {
        
    }
}
</script>

<style scoped>
.container {
    margin-top: 100px;
}
</style>
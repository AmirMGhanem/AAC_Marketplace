<template>
    <div>
        <label for="vertical">{{ label }}</label>
        <select class="form-control" id="vertical" name="vertical">
            <option v-for="o in options" :value="o.id">{{ o.name }}</option>

        </select>


    </div>
</template>

<script >
export default {
    props: [
        'options', 'label'
    ],

}
</script>

<style scoped>
#vertical {
    width: 100%;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #ccc;
    padding: 5px;
    margin-bottom: 10px;
}

</style>
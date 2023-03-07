<template>
    <div class="container">

        <div v-for="(field, index) in  getFields('Home_improvement')" :key="index" class="input-group">
            <label for="`${field}`" class="label">{{ field }}</label>
            <select class="input">
                <option v-for="(header, index) in getMappedHeaders" :key="index">{{ header }}   V</option>
                
            </select>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters("uploadLeads/mapper", [
            "getFields",
            "getAllFields"
        ]),

        ...mapGetters("uploadLeads",
            [
                "getMappedHeaders",
            ]),
    },
}
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.input-group {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 16px;
}

.label {
    text-align: center;
    font-weight: bold;
    margin-bottom: 4px;
}

.input {
    width: 100%;
    height: 40px;
    border: 1px solid #474747;
    border-radius: 4px;
    box-sizing: border-box;
    padding: 8px;
    text-align: center;
    font-size: larger;
    

}
</style>
  
<template>
    <div>
        <label for="vertical">{{ label }}</label>
        <select class="form-control" id="vertical" name="vertical" @change="set_choosed_vertical">
            <option value="">Select a vertical</option>
            <option v-for="o in options" :value="o.id">{{ o.name }}</option>

        </select>


    </div>
</template>

<script >
import { mapMutations } from 'vuex';

export default {
    props: [
        'options', 'label'
    ],
    methods: {
        set_choosed_vertical(event) {
            this.setChoosedVertical(event.target.value);
        },
        ...mapMutations("uploadLeads",
            [
                "setChoosedVertical",
            ])
    }

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
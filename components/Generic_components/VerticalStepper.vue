<template>
    <v-stepper v-model="currentStep" vertical>
        <h1 class="mb-5 ">{{ title }}</h1>
        <div v-for="(step, index) in steps_list" :key="index">
            <v-stepper-step :complete="currentStep > index" :step="index + 1">
                <h3 class="mb-5">{{ step.title }}</h3>
            </v-stepper-step>
            <v-stepper-content :step="index + 1">
                <v-card class="mb-5" :color="step.color">
                    <component :is="step.type === 'component' ? step.child_component : 'div'" :options="step.options">
                        {{ step.type === 'element' ? step.content : null }}
                    </component>

                    
                </v-card>
                <v-btn class="previous-btn" @click="previousStep">
                    previous</v-btn>
                <v-btn class="continue-btn" @click="nextStep">
                    continue</v-btn>
            </v-stepper-content>
            <v-divider v-if="index < steps_list.length - 1"></v-divider>
        </div>
    </v-stepper>
</template>
  
<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
        },
        steps_list: {
            type: Array,
            required: true,
        },

    },
    data() {
        return {
            currentStep: 1,
        };
    },
    methods: {
        nextStep() {
            this.$emit('step-change', this.currentStep);
            if (this.currentStep < this.steps_list.length) {
                this.currentStep++;
            } else {
                this.currentStep = 1;
            }
        },
        previousStep() {
            if (this.currentStep > 1) {
                this.currentStep--;
            } else {
                this.currentStep = 1;
            }
        },
    },
};
</script>

<style  scoped>
.mb-5 {
    text-align: center;
    
}
.v-stepper__content{
    background-color: grey;

}

.v-stepper__step .v-stepper__step--active .v-stepper__step--complete{
    background-color: yellow !important;
    border-color: yellow !important;
}

.continue-btn {
    float: right;
    background-color: rgba(12, 101, 0, 0.418) !important;
    color: white;
}

.continue-btn:hover {
    color: black;
}

.v-stepper__step__step.primary {
    background-color: red !important;
    border-color: red !important;
    
}


.v-stepper__label {
    color: red !important;
}


.v-stepper__header {
    background-color: rgb(231, 231, 231);

}

.title-container {
    display: flex;
    justify-content: left;
    margin-left: 15px;
    margin-bottom: 50px;

}
</style>
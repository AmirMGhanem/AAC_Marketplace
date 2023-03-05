<template>
    <div>
        <div class="title-container">
            <h1>{{ title }}</h1>
        </div>
        <v-stepper v-model="currentStep">
            <v-stepper-header>
                <v-stepper-step editable step="1" :complete="currentStep > 1" :editable="currentStep > 1">
                    Select A Vertical
                </v-stepper-step>
                <v-divider></v-divider>
                <v-stepper-step step="2" :complete="currentStep > 2" :editable="currentStep > 2">Select A
                    Vertical</v-stepper-step>
                <v-divider></v-divider>
                <v-stepper-step step="3" :complete="currentStep > 3" :editable="currentStep > 3">Create an
                    ad</v-stepper-step>
                <v-divider></v-divider>
                <v-stepper-step step="4" :complete="currentStep > 4" :editable="currentStep > 4">Create an ad
                    4</v-stepper-step>
                <v-divider></v-divider>
                <v-stepper-step step="5" :complete="currentStep > 5" :editable="currentStep > 5">Create an ad
                    5</v-stepper-step>
                <v-divider></v-divider>
                <v-stepper-step step="6" :complete="currentStep > 6" :editable="currentStep > 6">Create an ad
                    6</v-stepper-step>
            </v-stepper-header>

            <v-stepper-items>
                <v-stepper-content step="1">
                    <v-card class="mb-5" color="red lighten-1" height="200px">
                        <h1>Select A Vertical</h1>
                        <CustomSelect :options="verticals()" :label="'Select Vertical'" />
                        
                    </v-card>
                    <v-btn class="continue-btn" @click="currentStep = 2">
                        Continue
                    </v-btn>
                </v-stepper-content>

                <v-stepper-content step="2">
                    <v-card class="mb-5" color="grey lighten-1" height="200px">
                        <h1>step2</h1>
                    </v-card>
                    <v-btn class="continue-btn" @click="currentStep = 3">
                        Continue
                    </v-btn>
                </v-stepper-content>

                <v-stepper-content step="3">
                    <v-card class="mb-5" color="grey lighten-1" height="200px">
                        <h1>step3</h1>
                    </v-card>
                    <v-btn class="continue-btn" @click="currentStep = 4">
                        Continue
                    </v-btn>
                </v-stepper-content>

                <v-stepper-content step="4">
                    <v-card class="mb-5" color="grey lighten-1" height="200px">
                        <h1>step4</h1>
                    </v-card>
                    <v-btn class="continue-btn" @click="currentStep = 5">
                        Continue
                    </v-btn>
                </v-stepper-content>

                <v-stepper-content step="5">
                    <v-card class="mb-5" color="grey lighten-1" height="200px">
                        <h1>step5</h1>
                    </v-card>
                    <v-btn class="continue-btn" @click="currentStep = 6">
                        Continue
                    </v-btn>
                </v-stepper-content>

                <v-stepper-content step="6">
                    <v-card class="mb-5" color="grey lighten-1" height="200px">
                        <h1>step6</h1>
                    </v-card>
                    <v-btn class="continue-btn" @click="currentStep = 1">
                        Start over
                    </v-btn>
                </v-stepper-content>
            </v-stepper-items>
        </v-stepper>
    </div>
</template>

<script>

import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            currentStep: 1,
            
        };
    },
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
    created() {
        this.$store.dispatch('vertical/fetchAllVerticals');
    },
    methods:{
        ...mapGetters({
            verticals: 'vertical/GetVerticals',
        }),
    }
};

</script> 

<style  scoped>

.mb-5 {
    text-align: center;
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

}</style>
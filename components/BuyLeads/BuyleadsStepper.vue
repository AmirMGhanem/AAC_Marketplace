<template>
    <v-stepper v-model="currentStep" vertical>
        <v-stepper-step :complete="currentStep > 1" step="1">
            Select A Vertical
        </v-stepper-step>

        <v-stepper-content step="1">
            <v-card class="mb-5" color="red lighten-1">
                <h1>Select A Vertical</h1>
                <CustomSelect :options="verticals()" :label="'Select Vertical'" />
            </v-card>
            <v-btn class="continue-btn" @click="nextStep">
                Continue
            </v-btn>
        </v-stepper-content>

        <v-divider></v-divider>

        <v-stepper-step :complete="currentStep > 2" step="2">
            Select A Vertical
        </v-stepper-step>

        <v-stepper-content step="2">
            <v-card class="mb-5" color="grey lighten-1">
                <h1>step2</h1>
                <CsvImporter />
            </v-card>
            <v-btn class="continue-btn" @click="nextStep">
                Continue
            </v-btn>
        </v-stepper-content>

        <v-divider></v-divider>

        <v-stepper-step :complete="currentStep > 3" step="3">
            Fields Mapping
        </v-stepper-step>

        <v-stepper-content step="3">
            <v-card class="mb-5" color="grey lighten-1">
                <h1>step3</h1>
                <Mapper />
            </v-card>
            <v-btn class="continue-btn" @click="nextStep">
                Continue
            </v-btn>
        </v-stepper-content>

        <v-divider></v-divider>

        <v-stepper-step :complete="currentStep > 4" step="4">
            Preview & Confirmation
        </v-stepper-step>

        <v-stepper-content step="4">
            <v-card class="mb-5" color="grey lighten-1">
                <h1>step4</h1>
            </v-card>
            <v-btn class="continue-btn" @click="nextStep">
                Continue
            </v-btn>
        </v-stepper-content>

        <v-divider></v-divider>

        <v-stepper-step :complete="currentStep > 5" step="5">
            Create an ad
        </v-stepper-step>

        <v-stepper-content step="5">
            <v-card class="mb-5" color="grey lighten-1">
                <h1>step5</h1>
            </v-card>
            <v-btn class="continue-btn" @click="nextStep">
                Continue
            </v-btn>
        </v-stepper-content>

        <v-divider></v-divider>

        <v-stepper-step :complete="currentStep > 6" step="6">
            Create an ad
        </v-stepper-step>

        <v-stepper-content step="6">
            <v-card class="mb-5" color="grey lighten-1">
                <h1>step6</h1>
            </v-card>
            <v-btn class="continue-btn" @click="nextStep">
                Start over
            </v-btn>
        </v-stepper-content>
    </v-stepper>
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
        this.$store.dispatch("vertical/fetchAllVerticals");
    },
    methods: {
        ...mapGetters({
            verticals: "vertical/GetVerticals",
        }),
        nextStep() {
            switch (this.currentStep) {
                case 1:
                    if (this.getChoosedVertical) {
                        this.currentStep++;
                    }
                    else {
                        alert("Please select a vertical")

                    }
                    break;
                case 2:
                    if (this.getMappedHeaders.length > 0 && this.getMappedHeaders.length > 0) {
                        this.currentStep++;
                    }
                    else {
                        alert("Please Upload File")

                    }
                    break;
                case 3:
                    this.currentStep++;
                    break;
                case 4:
                    this.currentStep++;
                    break;
                case 5:
                    this.currentStep++;
                    break;
                case 6:
                    this.currentStep = 1;
                    break;
            }
        },

    },
    computed: {
        ...mapGetters("uploadLeads", [
            "getChoosedVertical",
            "getMappedHeaders",
            "getMappedHeaders",
        ])
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

}
</style>
<template>
    <div>
        <div class="container">
            <VerticalStepper :title="title" :steps_list="steps_list" />

        </div>
    </div>
</template>

<script >

export default {
    data() {
        return {
            title: 'Upload File',
            steps_list: [
                {
                    "title": "Number Of Leads Needed",
                    type: 'component',
                    child_component: 'Hero',
                    options: { prop1: 'value1', prop2: 'value2' }
                },
                {
                    "title": "Vertical",
                    type: 'element',
                    content: "<p>This is the content for Step 2.</p>",
                    options: { prop1: 'value1', prop2: 'value2' }
                },
                {
                    "title": "Age Of leads",
                    type: 'element',
                    content: "<p>This is the content for Step 2.</p>",
                    options: { prop1: 'value1', prop2: 'value2' }
                },
                {
                    "title": "Location",
                    type: 'element',
                    content: "<p>This is the content for Step 2.</p>",
                    options: { prop1: 'value1', prop2: 'value2' }
                },
                {
                    "title": "Certificates",
                    type: 'element',
                    content: "<p>This is the content for Step 2.</p>",
                    options: { prop1: 'value1', prop2: 'value2' }
                },
                {
                    "title": "Home Owner",
                    type: 'element',
                    content: "<p>This is the content for Step 2.</p>",
                    options: { prop1: 'value1', prop2: 'value2' }
                },
                {
                    "title": "Advanced Filter",
                    type: 'element',
                    content: "<p>This is the content for Step 2.</p>",
                    options: { prop1: 'value1', prop2: 'value2' }
                },
                {
                    "title": "Phone Scrubbing List",
                    type: 'element',
                    content: "<p>This is the content for Step 2.</p>",
                    options: { prop1: 'value1', prop2: 'value2' }
                },
                {
                    "title": "Price Per Lead",
                    type: 'element',
                    content: "<p>This is the content for Step 2.</p>",
                    options: { prop1: 'value1', prop2: 'value2' }
                },
                {
                    "title": "Order Period",
                    type: 'element',
                    content: "<p>This is the content for Step 2.</p>",
                    options: { prop1: 'value1', prop2: 'value2' }
                },
                {
                    "title": "Name Of The Order",
                    type: 'element',
                    content: "<p>This is the content for Step 2.</p>",
                    options: { prop1: 'value1', prop2: 'value2' }
                },
            ],
        }

    },

}
</script>

<style scoped></style>
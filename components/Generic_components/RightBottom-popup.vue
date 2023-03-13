<template>
    <div class="file-uploader">
        <div class="file-info">
            <div class="file-name">{{ fileName }}</div>
            <div class="file-progress">{{ progress }}%</div>
            <progress class="file-progress-bar" :value="progress" max="100"></progress>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        fileName: {
            type: String,
            default: ''
        },
        progress: {
            type: Number,
            default: 0
        }
    }
}
</script>

<style scoped>
.file-uploader {
    position: fixed;
    bottom: 10px;
    right: 10px;
    z-index: 999;
}

.file-info {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    background-color: #ffffff;
    border: 1px solid #cccccc;
    border-radius: 4px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}

.file-name {
    font-size: 14px;
    font-weight: bold;
}

.file-progress {
    font-size: 12px;
    margin-left: 10px;
}

.file-progress-bar {
    height: 5px;
    background-color: #007aff;
    margin-left: 10px;
    border-radius: 2.5px;
}
</style>

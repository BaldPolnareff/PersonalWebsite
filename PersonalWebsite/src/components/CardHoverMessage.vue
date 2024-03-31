<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
    message: string;
}>();
</script>

<template>
    <div class="card-hover">
        <h4>{{ props.message }}</h4>
    </div>
</template>

<style scoped>
.card-hover {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 40px;
    background-color: rgba(0, 0, 0, 0.5);
    filter: blur(20px);
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
}
</style>
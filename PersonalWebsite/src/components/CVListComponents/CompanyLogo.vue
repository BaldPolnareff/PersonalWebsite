<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
    logoUrl: string | undefined;
}>();
</script>

<template>
    <div class="logo-container">
        <img :src="props.logoUrl" alt="">
    </div>
</template>

<style scoped>
img {
    width: 90px;
    height: 90px;
    border-radius: 5%;
}
.logo-container {
    border-radius: 30%;
    display: flex;
    justify-content: left;
    margin-left: 2rem;
    margin-bottom: 2rem;
}
</style>
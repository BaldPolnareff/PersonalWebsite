<script setup lang="ts">
import { ref, defineProps } from 'vue';
import CardHoverMessage from './CardHoverMessage.vue';
import VLazyImage from 'v-lazy-image';

const hoverMessage: string = 'Full res'; 

const props = defineProps<{
    isLoading: boolean;
    imgUrl: string;
}>();
</script>

<template>
    <main class="content-wrapper">
        <VLazyImage 
            v-if="!props.isLoading" 
            :src="props.imgUrl"
            src-placeholder="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Suzanne.png/640px-Suzanne.png"
            alt="Blender Artwork" 
            :title="hoverMessage"
        />
        <a-spin v-else />
    </main>
</template>

<style scoped>

.content-wrapper {
    width: 400px;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.v-lazy-image {
    width: 400px;
    height: 400px;
    border-radius: 10px;
    object-fit: cover;
    filter: blur(5px);
    will-change: filter;
    transition: filter 0.9s;
}

.v-lazy-image-loaded {
    filter: blur(0);
}

.v-lazy-image:hover {
    filter: blur(0);
    cursor: pointer;
    box-shadow: 0 0 10px rgba(207, 207, 207, 0.5);
    transform: scale(1.05);
}
</style>
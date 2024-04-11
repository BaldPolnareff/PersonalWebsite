<script setup lang="ts">
import { ref, defineProps } from 'vue';

const hoverMessage: string = 'Full res'; 

const props = defineProps<{
    isLoading: boolean;
    imgUrl: string;
}>();

const showHoverMessage = ref<boolean>(false);
</script>

<template>
    <main class="content-wrapper">
        <a-tooltip>
            <template #title>
                {{ hoverMessage }}
            </template>
            <img
                v-if="!props.isLoading"
                v-lazy="{
                    src: props.imgUrl,
                    placeholder: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Suzanne.png/640px-Suzanne.png',
                    error: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Error-logo.png'
                }"
                alt="Blender Artwork"
                class="v-lazy-image"
                @mouseover="showHoverMessage = true"
                @mouseleave="showHoverMessage = false"
            >
        </a-tooltip>
    </main>
</template>

<style scoped>

.content-wrapper {
    width: 400px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.v-lazy-image {
    width: 400px;
    height: 400px;
    border-radius: 10px;
    object-fit: cover;
    will-change: filter;
    transition: filter 0.7s;
}


.v-lazy-image:hover {
    filter: blur(10px);
    cursor: pointer;
    box-shadow: 0 0 10px rgba(207, 207, 207, 0.5);
}
</style>
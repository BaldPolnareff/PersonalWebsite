<script setup lang="ts">
import { ref, defineProps } from 'vue';
import VLazyImage from 'v-lazy-image';
import { FileImageOutlined } from '@ant-design/icons-vue';

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
            <VLazyImage 
                v-if="!props.isLoading" 
                :src="props.imgUrl"
                src-placeholder="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Suzanne.png/640px-Suzanne.png"
                alt="Blender Artwork" 
                @mouseover="showHoverMessage = true"
                @mouseleave="showHoverMessage = false"
            />
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
    filter: blur(5px);
    will-change: filter;
    transition: filter 0.7s;
}

.v-lazy-image-loaded {
    filter: blur(0);
}

.v-lazy-image:hover {
    filter: blur(10px);
    cursor: pointer;
    box-shadow: 0 0 10px rgba(207, 207, 207, 0.5);
}
</style>
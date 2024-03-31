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
        <VLazyImage 
            v-if="!props.isLoading" 
            :src="props.imgUrl"
            src-placeholder="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Suzanne.png/640px-Suzanne.png"
            alt="Blender Artwork" 
            :title="hoverMessage"
            @mouseover="showHoverMessage = true"
            @mouseleave="showHoverMessage = false"
        />
        <FileImageOutlined class="child" v-if="showHoverMessage"/>
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

.child {
    position: relative;
    z-index: 1000;
    width: 400px;
    top: -200px;
    left: 0;
    font-size: 3rem;
}

.child:hover {
    cursor: pointer;
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
    filter: blur(10px);
    cursor: pointer;
    box-shadow: 0 0 10px rgba(207, 207, 207, 0.5);
}
</style>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { supabase } from '@/utils/supabase';

const imageUrls = ref<string[]>([]);
const errorMessage = ref<string>('');
const loadingImages = ref<boolean>(true);
const loadingImage = ref<boolean>(false);

async function fetchImages(): Promise<void> {
    const imagesNames: string[] = [];

    loadingImages.value = true;
    const { data: imagePaths, error } = await supabase
        .storage
        .from('blender_gallery')
        .list('jpeg');

    if (error) {
        loadingImages.value = false;
        errorMessage.value = error.message;
    } else {
        for (let i = 0; i < imagePaths.length; i++) {
            imagesNames.push(imagePaths[i].name);
        }

        for (let i = 0; i < imagesNames.length; i++) {
            loadingImage.value = true;
            const { data: publicUrl } = await supabase 
                .storage
                .from('blender_gallery')
                .getPublicUrl(imagesNames[i]);

            if (publicUrl) {
                imageUrls.value.push(publicUrl.publicUrl);
                loadingImage.value = false;
            }
            else {
                errorMessage.value = `Error getting public url for ${imagesNames[i]}`;
                loadingImage.value = false;
            }
        }
    }
    errorMessage.value = '';
    loadingImages.value = false;
    loadingImage.value = false;
}

onMounted( async () => {
    await fetchImages()
})
</script>

<template>
    <main>
        <div class="gallery-container">
            <h1>Blender Artwork</h1>
            <p>Here's some of the artwork I created in Blender, you can get them in full res.</p>
        </div>
    </main>
</template>

<style scoped>
    .gallery-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: #282c34;
        color: white;
    }
</style>
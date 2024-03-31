<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { supabase } from '@/utils/supabase';
import Card from '@/components/Card.vue';

const imageUrls = ref<string[]>([]);
const errorMessage = ref<string>('');
const loadingImages = ref<boolean>(true);
const loadingImage = ref<boolean>(false);

function openImage(url: string): void {
    window.open(url, '_blank', 'noopener,noreferrer');
}

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
                .getPublicUrl(`jpeg/${imagesNames[i]}`);

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
            <div 
                class="image-gallery-container"
                v-for="url in imageUrls"
                :key="url"
            >
                <Card 
                    v-if="!loadingImages"
                    :isLoading="loadingImage"
                    :imgUrl="url"
                    @click="openImage(url)"
                />
                <a-spin v-else />
            </div>
    </main>
</template>

<style scoped>
.gallery-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #282c34;
    color: white;
    padding: 40px;
}

.image-gallery-container {
    display: inline-grid;
    align-items: center;
    justify-content: center;
    grid-template-columns: repeat(2, 0.05fr); /* Set 3 columns with equal width */
    margin-top: 50px;
    padding: 100px 0 30px 30px;
}
</style>
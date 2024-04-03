<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';

const envs = import.meta.env;
const VITE_SHADERTOY_API_KEY = envs.VITE_SHADERTOY_API_KEY;
const shadersIds = ref<string[]>([]);
const embeddedShadersQuery = 'gui=false&t=10&paused=false&muted=true';
const errorMessage = ref<string>('');
const loadingShaders = ref<boolean>(false);

async function fetchShaders() {
    loadingShaders.value = true;
    const { data, error } = await axios.get(`https://www.shadertoy.com/api/v1/shaders/query/BaldPolnareff?key=${VITE_SHADERTOY_API_KEY}`)
    if (error) {
        errorMessage.value = error.message;
    } else {
        for (let i = 0; i < data.Results.length; i++) {
            shadersIds.value.push(data.Results[i]);
        }
        loadingShaders.value = false;
    }
    errorMessage.value = '';
}

onMounted(async () => {
    await fetchShaders()
})
</script>

<template>
    <main>
        <div class="gallery-container">
            <h1>Procedural Artwork</h1>
            <p>Procedural Artwork is a form of generative art, where the artist creates an algorithm that generates the artwork. These shaders are written in GLSL, a C-like language that is used to write shaders for OpenGL and WebGL.</p>
        </div>
        <div class="shaders-container" v-if="!loadingShaders">
            <div class="shaders-wrapper">
                <iframe
                    class="shader"
                    v-for="id in shadersIds"
                    :key="id"
                    :src="`https://www.shadertoy.com/embed/${id}?${embeddedShadersQuery}`"
                    frameborder="0"
                    allowfullscreen
                ></iframe>
            </div>
        </div>
        <div class="spinner-container" v-else>
            <a-spin size="large" />
        </div>
    </main>
</template>

<style scoped>

.gallery-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 300px;
    background-color: #282c34;
    color: white;
    margin-bottom: 50px;
}

.shaders-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}

.shaders-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    max-width: 1800px;
    margin-bottom: 50px;
    margin-left: 50px;
}

.shader {
    width: 300px;
    height: 300px;
    border-radius: 10px;
}

.spinner-container {
    margin-top: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
}

@media screen and (max-width: 1800px){

    .gallery-container {
        height: auto;
        padding: 30px;
    }
    .shaders-wrapper {
        display: flex;
        flex-direction: column;
        padding: 40px;
    }

    .shader {
        width: 800px;
        height: 400px;
    }
}

@media screen and (max-width: 1000px){
    .shaders-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .shader {
        width: 100%;
        height: 400px;
    }

    .gallery-container {
        padding: 20px;
        height: auto;
    }
}
</style>
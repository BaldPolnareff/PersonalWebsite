<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
    <main>
        <h1>Page not found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <a-button type="link">
            <RouterLink to="/home">
                Go back to home
            </RouterLink>
        </a-button>
    </main>
</template>

<style scoped>
main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #282c34;
    color: white;
}
h1 {
    font-size: 2rem;
}
p {
    font-size: 1.5rem;
}

button {
    font-size: 1.5rem !important;
}
</style>
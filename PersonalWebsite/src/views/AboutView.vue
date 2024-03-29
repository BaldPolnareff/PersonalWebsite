<script setup lang="ts">
import Header from '@/components/Header.vue';
</script>

<template>
  <main>
    <Header></Header>
    <div class="about">
      <h1>This is an about page</h1>
    </div>
  </main>
</template>

<style>
.about {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #282c34;
  color: white;
}
</style>

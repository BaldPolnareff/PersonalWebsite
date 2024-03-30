<script setup lang="ts">
import Header from '@/components/Header.vue';
</script>

<template>
  <main>
    <Header></Header>
    <div class="about">
      <br>
      <h1>About me</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet a assumenda voluptatem impedit dolores maxime id corrupti quidem inventore consectetur.</p>
    </div>
  </main>
</template>

<style>
br {
  margin-top: 30px;
}
.about {
  display: flex;
  margin-top: 30px;
  gap: 20px;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #282c34;
  color: white;
}
</style>

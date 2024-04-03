<script setup lang="ts">
import Header from '@/components/Header.vue';
import Curriculum from '@/components/Curriculum.vue';
</script>

<template>
  <main>
    <Header></Header>
    <Curriculum></Curriculum>
  </main>
</template>

<style scoped>

main {
  padding-top: 30px;
}

@media screen and (max-width: 1024px){
  main {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

}

</style>

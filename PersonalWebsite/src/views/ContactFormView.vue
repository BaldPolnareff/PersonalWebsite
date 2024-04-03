<script setup lang="ts">
import ContactForm from '@/components/ContactForm.vue';
import Header from '@/components/Header.vue';
</script>

<template>
    <div class="header-container">
        <Header />
    </div>
    <div class="contact-form-wrapper">
        <ContactForm class="contact-form"/>
    </div>
</template>

<style scoped>
.header-container {
    padding-top: 20px;
    padding-bottom: 30px;
}
</style>
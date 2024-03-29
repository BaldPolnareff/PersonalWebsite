<script setup lang="ts">
import { ref } from 'vue';
import { CaretRightOutlined } from '@ant-design/icons-vue';
import { RouterLink } from 'vue-router';

const open = ref<boolean>(false);
const drawerStyle = `{
    backgroundColor: '#282c34',
    color: '#fff',
};`

function showDrawer() {
    open.value = true;
}

function onClose() {
    open.value = false;
}

</script>

<template>
    <div class="button-container">
        <a-button @click="showDrawer" type="text" size="large" class="show-drawer-btn">
            <CaretRightOutlined 
                style="font-size: 2rem; color: #fff;"
            />
        </a-button>
    </div>
    <div class="container">
        <a-drawer
            placement="left"
            :closable="false"
            :open="open"
            :get-container="false"
            :style="{ position: 'absolute', backgroundColor: '#1A1A1A', color: '#fff'}"
            @close="onClose"
            class="drawer"
        >
        <div class="drawer-content-wrapper">
            <RouterLink to="/home">Resume</RouterLink>
            <RouterLink to="/about">About me</RouterLink>
        </div>
    </a-drawer>
    </div>
</template>

<style scoped>

.button-container {
    position: fixed;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    z-index: 1000;
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;
}
.show-drawer-btn {
    position: fixed;
    padding: 15px;
}

.drawer-content-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

a {
    color: #fff;
    font-size: 30px;
}

a:hover {
    color: #d186ff;
    transform: scale(1.01);
}
</style>
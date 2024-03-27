<script setup lang="ts">
import { ref } from 'vue';
import { CaretRightOutlined } from '@ant-design/icons-vue';

const open = ref<boolean>(false);

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
            title="Basic Drawer"
            placement="left"
            :closable="false"
            :open="open"
            :get-container="false"
            :style="{ position: 'absolute' }"
            @close="onClose"
        >
        <p>Some contents...</p>
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
</style>
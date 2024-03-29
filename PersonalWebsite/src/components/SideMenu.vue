<script setup lang="ts">
import { ref } from 'vue';
import { 
    CaretRightOutlined, 
    BookOutlined, 
    SolutionOutlined, 
    UserOutlined, 
    SmileOutlined, 
    CodeOutlined, 
    ContactsOutlined
} from '@ant-design/icons-vue';
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
            <RouterLink to="/home">
                <SolutionOutlined />
                Resume
            </RouterLink>
            <RouterLink to="/about">
                <UserOutlined />
                About me
            </RouterLink>
            <RouterLink to="/blender-artwork">
                <SmileOutlined />
                Blender Artwork
            </RouterLink>
            <RouterLink to="/procedural-artwork">
                <CodeOutlined />
                Procedural Artwork
            </RouterLink>
            <RouterLink to="/contact">
                <ContactsOutlined />
                Contact me
            </RouterLink>
        </div>
    </a-drawer>
    </div>
</template>

<style scoped>

.button-container {
    position: fixed;
    top: 50%;
    left: 0;
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

.show-drawer-btn:hover {
    background-color: #00000000;
    transform: scale(1.01);
}

.drawer-content-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    padding: 15px;
}

a {
    color: #fff;
    font-size: 30px;
    margin-bottom: 10px;
}

a:hover {
    color: #d186ff;
    transform: scale(1.01);
}
</style>
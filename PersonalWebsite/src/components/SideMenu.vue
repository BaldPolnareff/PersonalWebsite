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

const caretRightOutlinedStyle = 'font-size: 2rem; color: #fff'; 
const caretRightOutlinedStyleHover = 'font-size: 2rem; color: #d186ff; transform: scale(1.3); cursor: pointer;';

const caretRightOutlinedHover = ref<boolean>(false);


function showDrawer() {
    open.value = true;
}

function onClose() {
    open.value = false;
}

</script>

<template>
    <div class="top-nav-bar">
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
    <div class="drawer-indicator-bar" @click="showDrawer">
        <button class="show-drawer-btn">
            <CaretRightOutlined 
                @onmouseenter="caretRightOutlinedHover = true" 
                @onmouseleave="caretRightOutlinedHover = false"
                :style="caretRightOutlinedHover ? caretRightOutlinedStyleHover : caretRightOutlinedStyle"
            />
        </button>
    </div>
    <div class="container">
        <a-drawer
            placement="left"
            :closable="true"
            :open="open"
            :get-container="true"
            :style="{ position: 'relative', backgroundColor: '#1A1A1A', color: '#fff', height: '100vh'}"
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

.top-nav-bar {
    display: flex;
    width: 100%;
    z-index: 1;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
    align-items: center;
    background-color: #1A1A1A;
    color: #fff;
    padding: 10px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.353);
}

@media (min-width: 1024px) {
    .top-nav-bar {
        display: none;
    }
}

.top-nav-bar a {
    color: #fff;
    font-size: 20px;
    text-decoration: none;
}

.drawer-indicator-bar {
    position: fixed;
    width: 100px;
    height: 100%;
    background-color: rgb(40, 40, 40);
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.353);
    display: flex;
    z-index: 1;
}

.drawer-indicator-bar:hover {
    background-color: rgb(50, 50, 50);
    transform: scaleX(1.5);
    align-items: center;
    justify-content: center;
}

@media (max-width: 768px) {
    .drawer-indicator-bar {
        width: 50px;
    }
}

@media (max-width: 1024px) {
    .drawer-indicator-bar {
        visibility: hidden;
    }

    
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.show-drawer-btn {
    padding: 15px;
    background-color: #00000000;
    border: none;
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
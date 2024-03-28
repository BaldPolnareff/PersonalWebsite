<script setup lang="ts">
import { ref } from 'vue';
import { CaretRightOutlined } from '@ant-design/icons-vue';

const activeKey = ref<string[]>(['1', '2', '3', '4']);
</script>

<template>
    <div class="cv-container">
        <a-collapse 
            class="collapse" 
            v-model:activeKey="activeKey"
            :bordered="false"
            ghost
        >
        <template #expandIcon="{ isActive }">
            <CaretRightOutlined :rotate="isActive ? 90 : 0" :style="'color: aliceblue;'"/>
        </template>
            <a-collapse-panel key="1">
                <template #header>
                    <h3>Work Experience</h3>
                </template>
                <p>Work Experience</p>
            </a-collapse-panel>
            <a-collapse-panel key="2">
                <template #header>
                    <h3>Education</h3>
                </template>
                <p>Education</p>
            </a-collapse-panel>
            <a-collapse-panel key="3">
                <template #header>
                    <h3>Publications</h3>
                </template>
                <p>Publications</p>
            </a-collapse-panel>
            <a-collapse-panel key="4">
                <template #header>
                    <h3>Computer Skills</h3>
                </template>
                <p>Computer Skills</p>
            </a-collapse-panel>
        </a-collapse>
    </div>
</template>

<style scoped>
.cv-container {
    margin-top: 10px;
    justify-content: space-between;
    align-items: center;
    padding: 0 200px;
}

.collapse {
    background-color: rgb(26, 26, 26);
}

.collapse .ant-collapse-item {
    color: aliceblue !important;
}

h3 {
    color: aliceblue;
}

p {
    color: aliceblue;
}

</style>
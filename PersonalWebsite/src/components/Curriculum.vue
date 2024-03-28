<script setup lang="ts">
import { ref } from 'vue';

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
            <a-collapse-panel key="1" header="Work Experience">
                <p>Work Experience</p>
            </a-collapse-panel>
            <a-collapse-panel key="2" header="Education">
                <p>Education</p>
            </a-collapse-panel>
            <a-collapse-panel key="3" header="Publications">
                <p>Publications</p>
            </a-collapse-panel>
            <a-collapse-panel key="4" header="Computer Skills">
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
    padding: 0 150px;
}

.collapse {
    background-color: rgb(26, 26, 26);
    color: aliceblue !important;
}

</style>
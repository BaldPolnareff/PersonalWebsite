<script setup lang="ts">
import { ref } from 'vue';
import { CaretRightOutlined } from '@ant-design/icons-vue';
import WorkExperienceAList from '@/components/CVListComponents/WorkExperienceAList.vue';
import type { CVItem } from '@/utils/types';

const activeKey = ref<string[]>(['1', '2', '3', '4']);
const WorkExperiences = ref<CVItem[]>([
    {
        role: 'Data Science Intern',
        company: 'RUAG Space',
        startDate: '08/2023',
        endDate: '03/2024',
        detailedDescription: [
            `Developed a data validation and paperless reporting pipeline using Pydantic and Pylatex, 
            reducing the time spent on producing reports from weeks to only a few instants.`,
            `Developed an interactive dashboard using Vue.js, FastAPI and SQLAlchemy, moving 70% 
            of the data analysis from Excel spreadsheets to a more efficient and user-friendly environment.`,
            `Introduced Poetry for dependency management in Python projects, significantly increasing 
            the team productivity.`, 
            `Worked with Sideeffects.ch's VR software suite, and developed a virtual training environment 
            on the Meta Quest 3 that automated 100% of the assembly procedure documentation, reducing the 
            time needed for training by 50%`
        ]
    }
]);
    
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
                    <div class="cv-items-container">
                        <WorkExperienceAList v-for="workExperience in WorkExperiences" :key="workExperience.role" :CVItem="workExperience" />
                    </div>
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
    display: flex;
    margin-top: 10px;
    justify-content: space-between;
    align-items: center;
    padding: 0 200px;
}

.collapse {
    background-color: inherit;
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
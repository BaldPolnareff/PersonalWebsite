<script setup lang="ts">
import { ref } from 'vue';
import { CaretRightOutlined, CodeOutlined, BookOutlined, ExperimentOutlined, LaptopOutlined } from '@ant-design/icons-vue';
import WorkExperienceAList from '@/components/CVListComponents/WorkExperienceAList.vue';
import EducationAList from '@/components/CVListComponents/EducationAList.vue';
import PublicationsAList from '@/components/CVListComponents/PublicationsAList.vue';
import ComputerSkillsAList from '@/components/CVListComponents/ComputerSkillsAList.vue';
import type { PublicationItem, CVItem } from '@/utils/types';

const iconStyle: string = 'color: aliceblue; font-size: 35px';
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

const Education = ref<CVItem[]>([
    {
        role: 'MSc in Aerospace Engineering',
        company: 'Polytechnic University of Turin',
        endDate: '2022',
        location: 'Turin (IT)'
    }, 
    {
        role: 'BSc in Aerospace Engineering',
        company: 'Polytechnic University of Turin',
        endDate: '2019',
        location: 'Turin (IT)'
    }
]);

const Publications = ref<PublicationItem[]>([
    {
        title: `Novel 3D Printable Bio-based and Biodegradable Poly(3-hydroxybutyrate-co-3- hydroxyhex-
                anoate) Microspheres for Selective Laser Sintering Applications`, 
        authors: `A. Giubilini, G. Colucci, G. De Trane, F. Lupone, C. Badini, P. Minetola, F. Bondioli, M. Messori`,
        journal: 'Materials Today Sustainability',
        doi: 'doi.org/10.1016/j.mtsust.2023.100379', 
        abstract: `Selective laser sintering (SLS) has become the most popular additive manufacturing process due to its
                    high accuracy, productive efficiency, and surface quality. However, currently there are still very few
                    commercially available polymeric materials suitable for this technique. This research work focused on
                    the fabrication and characterization of bio-based and biodegradable microspheres obtained by oil-inwater emulsion solvent evaporation, starting from a poly(3-hydroxybutyrate-co-3-hydroxyhexanoate)
                    (PHBH) biopolymer matrix. First, the fabrication parameters were optimized to improve the morphological, thermal, and flowability properties of the synthetized microspheres. Once the best production
                    conditions were established, the PHBH microspheres were further used to study their effective 3D
                    printability on an SLS 3D printer using geometries varying from simple shapes to architectures with
                    more complex internal patterns. The results of this research revealed that PHBH has promising applicability for the SLS technique. This study undertook the first step toward broadening the range of
                    polymeric materials for this additive manufacturing technology. These findings will contribute to a
                    greater and wider dissemination of the SLS technique in the future, as well as they will bring this
                    manufacturing process closer to applications, such as the biomedical sector, where the use of biodegradable and biocompatible materials can add value to the final application.`
    }
])
    
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
                <template #extra>
                    <CodeOutlined  :style="iconStyle"/>
                </template>
                <template #header>
                    <h1>Work Experience</h1>
                </template>
                    <div class="cv-items-container">
                        <WorkExperienceAList v-for="workExperience in WorkExperiences" :key="workExperience.role" :CVItem="workExperience" />
                    </div>
            </a-collapse-panel>
            <a-collapse-panel key="2">
                <template #extra>
                    <BookOutlined :style="iconStyle"/>
                </template>
                <template #header>
                    <h1>Education</h1>
                </template>
                    <div class="cv-items-container">
                        <EducationAList v-for="education in Education" :key="education.role" :CVItem="education" />
                    </div>
            </a-collapse-panel>
            <a-collapse-panel key="3">
                <template #extra>
                    <ExperimentOutlined :style="iconStyle"/>
                </template>
                <template #header>
                    <h1>Publications</h1>
                </template>
                <PublicationsAList v-for="publication in Publications" :key="publication.title" :publication="publication" />
            </a-collapse-panel>
            <a-collapse-panel key="4">
                <template #extra>
                    <LaptopOutlined :style="iconStyle"/>
                </template>
                <template #header>
                    <h1>Computer Skills</h1>
                </template>
                <ComputerSkillsAList />
            </a-collapse-panel>
        </a-collapse>
    </div>
</template>

<style scoped>
.cv-container {
    margin-top: 30px;
    margin-bottom: 20px;
    justify-content: space-between;
    align-items: center;
    padding: 0 200px;
    background-color: #282c34;
}

.collapse {
    background-color: inherit;
    padding-top: 20px;
}

.collapse .ant-collapse-item {
    color: aliceblue !important;
    margin-bottom: 10px;
}

h1 {
    color: aliceblue;
}

h3 {
    color: aliceblue;
}

p {
    color: aliceblue;
}

</style>
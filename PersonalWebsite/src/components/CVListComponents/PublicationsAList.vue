<script setup lang="ts">
import { LinkOutlined } from '@ant-design/icons-vue';
import { defineProps } from 'vue';
import type { PublicationItem } from '@/utils/types';

const iconStyle = 'color: aliceblue; font-size: 1.2rem;';

const props = defineProps<{
    publication: PublicationItem;
}>();
</script>


<template>
    <div class="work-experience-list">
        <a-list item-layout="vertical">
            <h3>{{ props.publication.title }}</h3>
            <h4>{{ props.publication.journal }}</h4>
            <div class="doi-wrapper">
                <LinkOutlined :style="iconStyle"/>
                <a :href="'https://' + props.publication.doi" target="_blank" rel="noopener noreferrer">{{ props.publication.doi }}</a>
            </div>
            <h5>{{props.publication.authors}}</h5>
            <br>
            <div class="description-container">
                <p>
                    {{props.publication.abstract}}
                </p>
            </div>
        </a-list>
    </div>
</template>

<style scoped>
.work-experience-list {
    margin-left: 2rem;
}

h3 {
    color: aliceblue;
    font-weight: bold;
}

h4 {
    color: aliceblue;
    font-weight: bold;
}

h5 {
    color: aliceblue;
}

.description-container {
    color: aliceblue;
}

.detailed-description-container {
    color: aliceblue;
}

.doi-wrapper {
    display: flex;
    align-items: center;
    color: aliceblue;
    gap: 5px;
    margin-bottom: 10px;
}

</style>
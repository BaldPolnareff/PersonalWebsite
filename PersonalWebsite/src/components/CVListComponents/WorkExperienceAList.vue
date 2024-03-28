<script setup lang="ts">
import { StarOutlined, LikeOutlined, MessageOutlined } from '@ant-design/icons-vue';
import { defineProps } from 'vue';
import type { CVItem } from '@/utils/types';

const props = defineProps<{
    CVItem: CVItem;
}>();
    
</script>


<template>
    <div class="work-experience-list">
        <a-list item-layout="vertical">
            <h4>{{props.CVItem.startDate + "-" + props.CVItem.endDate + "   " + props.CVItem.role }}</h4>
            <h5>{{props.CVItem.company}}</h5>
            <br>
            <div class="description-container" v-if="props.CVItem.description">
                <p>
                    {{props.CVItem.description}}
                </p>
            </div>
            <div class="detailed-description-container" v-if="props.CVItem.detailedDescription">
                <ul>
                    <li v-for="description in props.CVItem.detailedDescription" :key="description">
                        {{description}}
                    </li>
                </ul>
            </div>
        </a-list>
    </div>
</template>

<style scoped>
.work-experience-list {
    margin-left: 2rem;
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

</style>
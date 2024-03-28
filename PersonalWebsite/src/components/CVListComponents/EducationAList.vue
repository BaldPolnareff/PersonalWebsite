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
            <h3>{{ props.CVItem.endDate + ' '}} {{ props.CVItem.role }}</h3>
            <h4>{{ props.CVItem.company }} - {{ props.CVItem.location }}</h4>
            <br>
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

</style>
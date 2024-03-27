<script setup lang="ts">
import { ref, defineProps } from 'vue';
import { supabase } from '@/utils/supabase';
import { AntDesignOutlined } from '@ant-design/icons-vue';

const env = import.meta.env;
const propicUrl = ref<string>(env.VITE_PROFILE_AVATAR_URL as string);

</script>

<template>
    <div class="header-container">
        <a-typography-title level="1">Giorgio De Trane</a-typography-title>
        <a-avatar 
            :src="propicUrl" 
            class="avatar"
            :size=200
        >
            <template #icon>
                <AntDesignOutlined />
            </template>
        </a-avatar>
        <h3>Software Developer</h3>
    </div>
</template>

<style scoped>
.header-container {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
}

.avatar {
    margin-bottom: 1rem;
}

h1 {
    color: aliceblue;
}

</style>
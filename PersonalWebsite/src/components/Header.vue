<script setup lang="ts">
import { ref, defineProps } from 'vue';
import { supabase } from '@/utils/supabase';
import { AntDesignOutlined, LinkedinOutlined, GithubOutlined, MailOutlined } from '@ant-design/icons-vue';

const env = import.meta.env;
const propicUrl = ref<string>(env.VITE_PROFILE_AVATAR_URL as string);

const LinkedinmouseHover = ref<boolean>(false);
const GithubmouseHover = ref<boolean>(false);
const MailmouseHover = ref<boolean>(false);

const iconStyle = 'color: aliceblue; font-size: 3.5rem;';
const iconStyleOnHover = 'color: #d88fff; font-size: 3.5rem; transform: scale(1.1); mouse: pointer;';

</script>

<template>
    <div class="header-container">
        <a-typography-title :level="1">Giorgio De Trane</a-typography-title>
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
        <div class="social-wrapper">
            <LinkedinOutlined 
                :style="LinkedinmouseHover ? iconStyleOnHover : iconStyle" 
                @mouseover="LinkedinmouseHover=true"
                @mouseleave="LinkedinmouseHover=false"
            />
            <GithubOutlined 
                :style="GithubmouseHover ? iconStyleOnHover : iconStyle"
                @mouseover="GithubmouseHover=true"
                @mouseleave="GithubmouseHover=false"
            />
            <MailOutlined 
                :style="MailmouseHover ? iconStyleOnHover : iconStyle"
                @mouseover="MailmouseHover=true"
                @mouseleave="MailmouseHover=false"    
            />
        </div>
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

.social-wrapper {
    margin-top: 1.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
}

</style>
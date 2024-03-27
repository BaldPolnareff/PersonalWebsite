import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'ant-design-vue/dist/reset.css';
import antd from 'ant-design-vue';

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(antd)
app.use(router)

app.mount('#app')

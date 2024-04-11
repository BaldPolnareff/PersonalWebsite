import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'ant-design-vue/dist/reset.css';
import antd from 'ant-design-vue';
import VueLazyload from 'vue3-lazyload';

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(antd)
app.use(VueLazyload, {
    loading: '',
    error: '',
    lifecycle: {
        loading: (el) => {
        console.log('loading', el)
        },
        error: (el) => {
        console.log('error', el)
        },
        loaded: (el) => {
        console.log('loaded', el)
        }
    }
})
app.use(router)

app.mount('#app')

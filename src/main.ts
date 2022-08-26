import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import stores from "./stores";
import 'nprogress/nprogress.css'

createApp(App)
    .use(stores)
    .use(router)
    .mount('#app')

import { createRouter, createWebHistory } from 'vue-router'
import Main from '../pages/main.vue'
import Home from '../pages/home.vue'

const routes = [
    {
        path: '/',
        component: Main,
        children: [
            {
                path:'',
                component: Home
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
import { createRouter, createWebHistory } from 'vue-router'
import Main from '../pages/main.vue'
import Home from '../pages/home.vue'
import Issue from '../pages/issue.vue'
import Wiki from '../pages/wiki.vue'
import Square from '../pages/square.vue'
import About from '../pages/about.vue'

const routes = [
    {
        path: '/',
        component: Main,
        children: [
            {
                path:'',
                component: Home
            },{
                path: 'issues',
                component: Issue
            },{
                path:'wiki',
                component: Wiki
            }, {
                path: 'square',
                component: Square
            }, {
                path: 'about',
                component: About
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
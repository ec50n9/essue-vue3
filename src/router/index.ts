import { createRouter, createWebHistory } from 'vue-router'
import Main from '../pages/main.vue'
import Home from '../pages/home.vue'
import Issue from '../pages/Issue.vue'
import Wiki from '../pages/wiki.vue'
import Square from '../pages/square.vue'
import About from '../pages/about.vue'
import Login from '../pages/Login.vue'
import IssueMain from '../pages/issue/IssueMain.vue'
import IssueLaunch from '../pages/issue/IssueLaunch.vue'

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
                component: Issue,
                children: [
                    {
                        path: '',
                        component: IssueMain
                    }, {
                        path: 'launch',
                        component: IssueLaunch
                    }
                ]
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
    },{
        path:'/login',
        component: Login
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
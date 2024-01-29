import { createRouter,createWebHistory,} from 'vue-router'
import Home from "../views/Home.vue";

const routes = [
    {
        name:"主页",
        path:'/Home',
        component:Home,
    },
    {
        name:"错误",
        path: '/error',
        component: () => import('../views/Error.vue')
    }
    ];

const router = createRouter({
    routes,  // 路由路径
    history: createWebHistory(),
})

export default router
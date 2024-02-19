import { createRouter,createWebHistory,useRouter} from 'vue-router'
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
    },
    {
        name:"分类",
        path: '/class',
        component: () => import('../views/Class.vue')
    },
    {
        name:"标签",
        path: '/tag',
        component: () => import('../views/Tag.vue')
    },
    {
        name:"归档",
        path: '/archives',
        component: () => import('../views/Archives.vue')
    },
    {
        name:"关于",
        path: '/about',
        component: () => import('../views/About.vue')
    },
    {
        name:"登录",
        path: '/login',
        component: () => import('../views/Login.vue')
    }
    ];

const router = createRouter({
    routes,  // 路由路径
    history: createWebHistory(),
})

export default router
import { createRouter, createWebHistory } from 'vue-router';
import { useUserStore } from '../store/user';
import Error from '@/views/Error.vue';
import Tag from '@/views/Tag.vue';
import Login from '@/pages/Login/Login.vue';
import Register from '@/views/Register.vue';
import PerInfo from '@/views/Perinfo.vue';
import Notfound from "@/components/Notfound.vue";
import Homepage from '@/pages/HomePage/Layout/HomePage.vue';
import About from "@/views/About.vue";
import Home from "@/views/Home.vue";

const routes = [
  {
    path: '/',
    component: Homepage,
    children:[
      {
        name:'首页',
        path:'/home',
        component:Home
      },
      {
        path: "/about",
        name:'关于',
        component:About
      },
      {
        path: "/userinfo",
        name:'用户信息',
        component: PerInfo
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: Notfound,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    name: 'register',
    path: '/register',
    component: Register,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const tokenStore = useUserStore();

  if (to.meta.requireAuth && (!tokenStore.token || !localStorage.getItem("token"))) {
    next('/login');
  } else {
    next();
  }
});

export default router;

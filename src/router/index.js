import { createRouter, createWebHistory } from 'vue-router';
import { useTokenStore } from '../store/token';
import Home from '../views/home.vue';

const routes = [
  {
    name: '主页',
    path: '/',
    component: Home,
    meta: { layout: 'default' },
  },
  {
    name: '错误',
    path: '/error',
    component: () => import('../views/error.vue'),
    meta: { layout: 'default' },
  },
  {
    name: '分类',
    path: '/class',
    component: () => import('../views/SideBar.vue'),
    meta: { layout: 'default' },
  },
  {
    name: '标签',
    path: '/tag',
    component: () => import('../views/Tag.vue'),
    meta: { layout: 'default' },
  },
  {
    name: '归档',
    path: '/archives',
    component: () => import('../views/SideBar.vue'),
    meta: { layout: 'default' },
  },
  {
    name: '关于',
    path: '/about',
    component: () => import('../views/About.vue'),
    meta: { requireAuth: true, layout: 'default' },
  },
  {
    name: '登录',
    path: '/login',
    component: () => import('../views/login.vue'),
    meta: { layout: 'auth' },
  },
  {
    name: '注册',
    path: '/register',
    component: () => import('../views/register.vue'),
    meta: { layout: 'auth' },
  },
  {
    path: '/perinfo',
    component: () => import('../views/perinfo.vue'),
    meta: { layout: 'default' },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const tokenStore = useTokenStore();

  if (to.meta.requireAuth && (!tokenStore.token || !localStorage.getItem("token"))) {
    next('/login');
  } else {
    next();
  }
});

export default router;

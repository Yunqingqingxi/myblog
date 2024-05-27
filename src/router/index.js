import { createRouter, createWebHistory } from 'vue-router';
import { useTokenStore } from '../store/token';
import Home from '../views/Home.vue';

const routes = [
  {
    name: '主页',
    path: '/',
    component: Home,
  },
  {
    name: '错误',
    path: '/error',
    component: () => import('../views/Error.vue'),
  },
  {
    name: '分类',
    path: '/class',
    component: () => import('../views/Class.vue'),
  },
  {
    name: '标签',
    path: '/tag',
    component: () => import('../views/Tag.vue'),
  },
  {
    name: '归档',
    path: '/archives',
    component: () => import('../views/Archives.vue'),
  },
  {
    name: '关于',
    path: '/about',
    component: () => import('../views/About.vue'),
    meta: { requireAuth: true }, // 需要认证的路由
  },
  {
    name: '登录',
    path: '/login',
    component: () => import('../views/Login.vue'),
    hidden: true,
  },
  {
    name: '注册',
    path: '/register',
    component: () => import('../views/Register.vue'),
  },
  {
    path: '/perinfo',
    component: () => import('../views/PerInfo.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const tokenStore = useTokenStore();

  if (to.meta.requireAuth && !tokenStore.token) {
    next('/login'); // 如果需要认证且未认证，跳转到登录页面
  } else {
    next(); // 否则，继续导航
  }
});

export default router;

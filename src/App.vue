<template>
  <component :is="layoutComponent">
    <router-view />
  </component>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import DefaultLayout from './components/DefaultLayout.vue';
import AuthLayout from './components/AuthLayout.vue';

const route = useRoute();

const layoutComponent = computed(() => {
  return route.meta.layout === 'auth' ? AuthLayout : DefaultLayout;
});
</script>

<style scoped>
/* 添加全局样式 */
</style>

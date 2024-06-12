<template>
  <!-- aside -->
  <el-menu
      @select="handleSelect"
  >
    <!-- 在el-menu中修改背景颜色和字体颜色 -->
    <el-sub-menu index="1" >
      <template #title>
        <span>博客</span>
      </template>
      <el-menu-item index="/null">
        <span>写博客</span>
      </el-menu-item>
      <el-menu-item index='/search'>
        <span>查询博客</span>
      </el-menu-item>
      <el-menu-item index='/null1'>
        <span>博客审核</span>
      </el-menu-item>
    </el-sub-menu>

    <el-sub-menu index="2">
      <template #title>
        <span>我的</span>
      </template>
      <el-menu-item index="/user/perinfo">
        <span>个人资料</span>
      </el-menu-item>
      <el-menu-item index="/user/register">
        <span>注册</span>
      </el-menu-item>
      <el-menu-item>
        <span>收到的信息</span>
      </el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="3">
      <template #title>
        <i class="el-icon-menu"></i>
        <span>ccc</span>
      </template>
      <el-menu-item>
        <span>选项五</span>
      </el-menu-item>
      <el-menu-item>
        <span>选项六</span>
      </el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="4">
      <template #title>
        <i class="el-icon-menu"></i>
        <span>菜单四</span>
      </template>
      <el-menu-item>
        <span>选项七</span>
      </el-menu-item>
      <el-menu-item>
        <span>选项八</span>
      </el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="5">
      <template #title>
        <span>菜单五</span>
      </template>
      <el-menu-item>
        <span>选项九</span>
      </el-menu-item>
      <el-menu-item>
        <span>选项十</span>
      </el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="6">
      <template #title>
        <span>菜单六</span>
      </template>
      <el-menu-item>
        <span>选项三</span>
      </el-menu-item>
      <el-menu-item>
        <span>选项四</span>
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script setup lang="ts">

import {useRouter} from 'vue-router';

const router = useRouter();

function handleSelect(key){
  router.push(key);
}

</script>

<style scoped>

</style>

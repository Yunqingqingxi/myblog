<template>
  <!-- 这是导航栏 -->
    <el-container class="container">  <!-- header -->
      <el-header class="el-header">
        <span>
          <router-link to="/" class="el-link">
          <img src="../src/assets/images/logo.svg" alt="" width="24" height="24">
          </router-link>
        </span>
        <span><router-link to="/" class="el-link">首页</router-link></span>
        <span><router-link to="about" class="el-link">关于我</router-link></span>
        <span class="search" id="search">
          <input type="text" class="search__input" placeholder="输入要查找的信息">
          <button class="search__button">
            <svg class="search__icon" aria-hidden="true" viewBox="0 0 24 24">
              <g>
                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
              </g>
            </svg>
          </button>
        </span>
        <!-- 头像 -->
        <div class="avatar-container" @mouseenter="showDropdown" @mouseleave="hideDropdown">
          <!-- 二级菜单 -->
        <el-dropdown
            :model="dropdownVisible"
            :show-timeout="1"
        >
            <el-avatar
                class="avatar"
                :src="userAvatar || defaultAvatar"
                :icon="UserFilled"
                shape="circle"
                size="large"
                fit="scale-down"
                style="width: 50px;height: 50px;align-items: center"
            />
          <template #dropdown>
            <span class="default-avatar" style="z-index: 100;font-size: small;align-items: center;margin-left: 45px;margin-top: 5px" slot="dropdown">{{ username }}</span><br>
            <el-dropdown-menu class="dropdown-menu" slot="dropdown">
              <el-dropdown-item @click="viewProfile()">个人资料</el-dropdown-item>
              <el-dropdown-item @click="editProfile" v-if="InfoIsExist">完善信息</el-dropdown-item>
              <el-dropdown-item @click="logout">登出</el-dropdown-item>
            </el-dropdown-menu>
          </template>
          </el-dropdown>
        </div>
      </el-header>
    </el-container>
<!-- 这是侧边栏 -->
  <el-container style="margin-top: 62px;">
    <el-aside >
      <!-- aside -->
      <el-menu
          :default-active="$route.path"
          @select="handleSelect"
      >
        <!-- 在el-menu中修改背景颜色和字体颜色 -->
        <el-sub-menu index="1" >
          <template #title>
            <span>博客</span>
          </template>
          <el-menu-item index='/login'>
            <span>写博客</span>
          </el-menu-item>
          <el-menu-item index='/register'>
            <span>查询博客</span>
          </el-menu-item>
          <el-menu-item index='/about'>
            <span>博客审核</span>
          </el-menu-item>
        </el-sub-menu>

          <el-sub-menu index="2">
            <template #title>
              <span>我的</span>
            </template>
            <el-menu-item index="/perinfo">
              <span>个人资料</span>
            </el-menu-item>
            <el-menu-item>
              <span>修改密码</span>
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
    </el-aside>

    <!-- 这是主界面 -->
    <el-main>
      <router-view />
    </el-main>
  </el-container>

</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from "vue-router";
import {UserFilled} from "@element-plus/icons-vue";

const store = useStore()
const router = useRouter()

function handleSelect(key){
 router.push(key);
}

// 控制二级菜单的显示与隐藏
const dropdownVisible = ref(false)

// 头像路径
const userAvatar = ref('/path/to/default/avatar.jpg')

// 默认头像路径
const defaultAvatar = '/path/to/default/avatar.jpg'

// 用户名
const username = '游客'

// 默认不完善
const InfoIsExist = true

// 显示二级菜单
const showDropdown = () => {
  setTimeout(() => {
    dropdownVisible.value = true
  }, 500)
}

// 隐藏二级菜单
const hideDropdown = () => {
  dropdownVisible.value = false
}

// 跳转到个人资料页面
const viewProfile = () => {
  // 跳转到个人资料页面的逻辑
  router.push('/perinfo')
}

// 跳转到完善信息页面
const editProfile = () => {
  // 跳转到完善信息页面的逻辑
}

// 执行登出操作
const logout = () => {
  // 执行登出操作的逻辑
}


</script>

<style scoped>

.container{
  height: 62px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff; /* 设置导航栏背景色 */
  z-index: 2; /* 确保导航栏在最顶层 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 添加阴影效果 */
}

.el-header{
  display: flex;
  align-items: center;
  height: 62px;
  z-index: 1;
}
.el-header span{
  height: 30px;
  width: 50px;
  margin-left: 20px;
  margin-top: 8px;
  align-items: center;
}
.el-link{
  text-decoration-line: none;
  color: #2e2e2e;
  transition: transform 0.2s ease-in-out;
}
.el-link:hover {
  animation: float 0.5s forwards;
}

@keyframes float {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}
#search{
  width: auto;
  margin-left: auto;
  margin-right: auto;
}

.avatar-container {
  display: inline-block;
  position: relative;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
}

.default-avatar {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 24px;
  color: #999;
  cursor: pointer;
}

.dropdown-menu {
  min-width: 150px;
  padding: 5px 0;
  position: relative;
}
</style>
<template>
  <el-container class="container">
    <el-header class="el-header">
      <nav-bar />
    </el-header>
    <el-container>
      <el-aside>
        <side-bar />
      </el-aside>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import NavBar from '../views/NavBar.vue'; // 导航栏组件
import SideBar from '../views/SideBar.vue'; // 侧边栏组件
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
  background-size: cover;
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
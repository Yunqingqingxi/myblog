<template>
  <el-container>
    <!-- el-header -->
    <el-header>
      <NavBar />
    </el-header>
    <el-container>
      <!-- el-side -->
      <el-aside width="220px">
        <SideBar />
      </el-aside>
      <!-- el-main -->
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import NavBar from "@/pages/HomePage/NavBar.vue";
import SideBar from "@/pages/HomePage/SideBar.vue";
</script>

<style scoped>
html, body {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  overflow: hidden;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

#nprogress .bar {
  /* 自定义进度条颜色 */
  background: #00ffec !important;
}

/* 过渡动画 */
.transition {
  animation: fade-in-fwd 1s cubic-bezier(0.39, 0.575, 0.565, 1) both;
}

@keyframes fade-in-fwd {
  0% {
    -webkit-transform: translateZ(-80px);
    transform: translateZ(-80px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    opacity: 1;
  }
}

.el-aside {
  background-color: #001529;
  height: 100%;
  overflow-y: auto;
}

.el-main {
  padding: 20px;
  overflow: auto;
}
</style>

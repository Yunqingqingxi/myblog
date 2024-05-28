<template>
  <div class="perInfo">
    <div class="header-image" :class="{ shrink: isShrunk }">
      <img src="../assets/images/preview.jpg" alt="Header Image" id="png_st" />
      <el-avatar :icon="UserFilled" class="avatar" @click="toggleInfoCard" @error="errorHandler" size="large">
        <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" alt="User Avatar" />
      </el-avatar>
    </div>
    <el-main class="info-container">
      <div class="info-card" :class="{ show: isShrunk }" ref="infoCard">
        <div class="info">
          <span class="span_info">用户名：{{ user ? user.username : '' }}</span>
          <span style="margin-left: auto;">送花</span>
        </div>
        <el-descriptions :size="'default'" :border="true" class="descriptions" :column="1" v-if="user">
          <el-descriptions-item label="Email" label-align="center">{{ user.email }}</el-descriptions-item>
          <el-descriptions-item label="Phone" label-align="center">{{ user.phone }}</el-descriptions-item>
          <el-descriptions-item label="Place" label-align="center">{{ user.place }}</el-descriptions-item>
          <el-descriptions-item label="Remarks" label-align="center">{{ user.remarks }}</el-descriptions-item>
        </el-descriptions>
      </div>
    </el-main>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue' // 引入 Vue Composition API 中的 ref 和 onMounted 方法
import { UserFilled } from "@element-plus/icons-vue" // 引入 Element Plus 中的 UserFilled 图标组件
import { useUserStore } from '../store/user' // 引入用户存储的自定义 hook

// 使用 useUserStore hook 获取用户存储对象
const userStore = useUserStore();

// 定义错误处理函数
const errorHandler = () => true;

// 创建一个响应式变量，表示信息卡片是否收缩
const isShrunk = ref(false);

// 定义切换信息卡片状态的函数
const toggleInfoCard = () => {
  isShrunk.value = !isShrunk.value;
};

// 定义处理滚动事件的函数
const handleScroll = () => {
  // 如果页面滚动位置大于 0，则收缩信息卡片
  if (window.scrollY > 0) {
    isShrunk.value = true;
  } else {
    // 否则展开信息卡片
    isShrunk.value = false;
  }
};

// 定义获取用户信息的函数
const fetchUserInfo = () => {
  // 如果用户已经认证
  if (userStore.isAuthenticated.value) {
    // 调用用户存储对象的 fetchUser 方法来获取用户信息
    userStore.fetchUser();
  }
};

// 在组件挂载后执行的操作
onMounted(() => {
  // 添加滚动事件监听器，用于处理滚动事件
  window.addEventListener('scroll', handleScroll);
  // 调用获取用户信息的函数
  fetchUserInfo(); // 调用获取用户信息的方法
});

</script>
<style scoped>
html, body {
  overflow-x: hidden; /* 禁用左右滚动 */
  margin: 0;
  padding: 0;
}

.perInfo {
  height: 100vh;
  overflow-y: hidden; /* 不允许上下滚动 */
  scroll-behavior: smooth;
}

.header-image {
  position: relative;
  width: 100%;
  height: 90vh;
  overflow: hidden;
  transition: height 0.5s ease, transform 0.5s ease;
}

.header-image.shrink {
  height: 50vh;
}

#png_st {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.header-image.shrink #png_st {
  transform: scale(1);
}

.avatar {
  position: absolute;
  bottom: 20px;
  left: 20px;
  border: 2px solid white;
  cursor: pointer;
}

.info-container {
  width: 100%;
  overflow-x: hidden; /* 禁用 el-main 的左右滚动 */
}

.info-card {
  width: 100%;
  padding: 20px;
  background: white;
  box-shadow: 0px -5px 10px rgba(0, 0, 0, 0.1);
  transition: max-height 0.5s ease, opacity 0.5s ease;
  max-height: 0;
  opacity: 0;
  overflow: hidden;
}

.info-card.show {
  max-height: 100vh;
  opacity: 1;
}

.info {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.span_info {
  margin-left: 150px;
}

.descriptions {
  display: flex;
  flex-direction: column;
}
</style>

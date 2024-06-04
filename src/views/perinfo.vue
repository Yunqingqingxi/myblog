<template>
  <div class="perInfo">
    <div class="header-image" :class="{ shrink: isShrunk }">
      <img src="../assets/images/preview.jpg" alt="Header Image" id="png_st" :class="{ blur: isShrunk }" />
      <div class="img_hum" @click="toggleInfoCard">
        <el-avatar :icon="UserFilled" class="avatar">
          <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" alt="User Avatar" />
        </el-avatar>
      </div>
    </div>
    <div style="width:100%;">
    <el-main style="width:100%;">
      <div class="info-card" :class="{ show: isShrunk }" ref="infoCard">
        <div class="info" style="display: flex; justify-content: space-between;">
          <span class="span_info" style="margin-left: 10px">用户名：{{ username }}</span>
          <span style="margin-right: 10px;">送花</span>
        </div>
        <el-descriptions :size="'default'" :border="true" class="descriptions" :column="1">
          <el-descriptions-item label="Email" label-align="center">{{ email }}</el-descriptions-item>
          <el-descriptions-item label="Phone" label-align="center">{{ phone }}</el-descriptions-item>
          <el-descriptions-item label="Place" label-align="center">{{ place }}</el-descriptions-item>
          <el-descriptions-item label="Remarks" label-align="center">{{ remarks }}</el-descriptions-item>
        </el-descriptions>
      </div>
    </el-main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { UserFilled } from "@element-plus/icons-vue";
import { getUserData } from '../api/user';

const username = ref('');
const email = ref('');
const phone = ref('');
const place = ref('');
const remarks = ref('');

const isShrunk = ref(false);

const toggleInfoCard = () => {
  isShrunk.value = !isShrunk.value;
  const avatarContainer = document.querySelector('.avatar-container');
  if (avatarContainer) {
    avatarContainer.classList.toggle('clicked', isShrunk.value);
  }
};

const handleScroll = () => {
  isShrunk.value = window.scrollY < 0;
  const avatarContainer = document.querySelector('.avatar-container');
  if (avatarContainer) {
    avatarContainer.classList.toggle('clicked', isShrunk.value);
  }
};

const fetchUserInfo = async () => {
  if (localStorage.getItem('token')) {
    try {
      const res = await getUserData();
      username.value = res.data.nickname;
      email.value = res.data.email;
      phone.value = res.data.phone;
      place.value = res.data.address;
      remarks.value = res.data.signature;
    } catch (error) {
      console.error('Failed to fetch user data:', error);
    }
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  fetchUserInfo();
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
html, body {
  margin: 0;
  padding: 0;
}

.perInfo {
  height: 100vh;
  overflow-y: auto; /* 让页面内容溢出时出现垂直滚动条 */
  scroll-behavior: smooth;
  display: flex;
  flex-wrap: wrap; /* 强制项目换行 */
}

.header-image {
  position: relative;
  width: 100%;
  height: auto; /* 让高度根据图片比例自适应 */
  max-height: 90vh; /* 限制最大高度为90%的视窗高度 */
  overflow: hidden;
  object-fit: cover; /* 等比例缩放并裁剪超出容器的部分 */
  transition: max-height 0.5s ease, transform 0.5s ease;
}
.header-image.shrink {
  height: 50vh;
  -webkit-animation: slide-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  animation: slide-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

#png_st {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease, filter 0.5s ease;
}

#png_st.blur {
  filter: blur(5px);
}

.img_hum {
  position: absolute;
  bottom: 20px;
  left: 20px;
  cursor: pointer;
  z-index: 3;
}

.avatar {
  width: 40px;
  height: 40px;
  border: 2px solid white;
}
.info-card {
  width: 100%; /* 设置宽度为100% */
  max-width: 600px;
  margin-left: 160px;
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
  margin-left: 150px; /* 调整用户信息的排列 */
}

.descriptions {
  display: flex;
  flex-direction: column;
}
</style>

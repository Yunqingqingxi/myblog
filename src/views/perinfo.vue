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
          <span class="span_info">用户名：{{ username }}</span>
          <span style="margin-left: auto;">送花</span>
        </div>
        <el-descriptions :size="'default'" :border="true" class="descriptions" :column="1" >
          <el-descriptions-item label="Email" label-align="center">{{ email }}</el-descriptions-item>
          <el-descriptions-item label="Phone" label-align="center">{{ phone }}</el-descriptions-item>
          <el-descriptions-item label="Place" label-align="center">{{ place }}</el-descriptions-item>
          <el-descriptions-item label="Remarks" label-align="center">{{ remarks }}</el-descriptions-item>
        </el-descriptions>
      </div>
    </el-main>
  </div>
</template>

<script setup>
import {ref, computed, onMounted} from 'vue';
import {UserFilled} from "@element-plus/icons-vue";

const errorHandler = () => true;
const isShrunk = ref(false);

const username = computed(() => 'John Doe');
const email = computed(() => 'john.doe@example.com');
const phone = computed(() => '123-456-7890');
const place = computed(() => 'San Francisco, CA');
const remarks = computed(() => 'This is a remark.');

const toggleInfoCard = () => {
  isShrunk.value = !isShrunk.value;
};

const handleScroll = () => {
  if (window.scrollY > 0) {
    isShrunk.value = true;
  } else {
    isShrunk.value = false;
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
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

<template>
  <div class="nav-bar">
    <!-- logo -->
    <div class="nav-bar-left">
      <span>
        <router-link class="el-link" to="/">
          <img alt="" height="36" src="../../assets/images/logo.svg" width="36">
        </router-link>
      </span>
      <!-- 其他 -->
      <span>
        <router-link class="el-link" to="/">首 页</router-link>
      </span>
      <span>
        <router-link class="el-link" to="/about">关于我</router-link>
      </span>
    </div>

    <!-- 搜索栏 -->
    <div class="nav-bar-center">
      <span>
      <input class="search__input" :style="{ width: searchBarWidth }" placeholder="输入要查找的信息" type="text">
      <button class="search__button">
        <svg aria-hidden="true" class="search__icon" viewBox="0 0 24 24">
          <g>
            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
          </g>
        </svg>
      </button>
    </span>
    </div>

    <div class="nav-bar-right">
    <!-- 头像 -->
    <span class="avatar" @click="toLogin">
      <el-avatar
          :icon="UserFilled"
          :src="userAvatar || defaultAvatar"
          class="avatar"
          fit="scale-down"
          shape="circle"
          size="large"
      />
    </span>
    </div>
  </div>
</template>

<script setup>
import { UserFilled } from "@element-plus/icons-vue";
import { ref, watch, onMounted } from "vue";
import router from "../../router/index.js";
import { useUserStore } from "@/store/user.js";
import { logout } from "@/api/user.js";

const userStore = useUserStore();

const userAvatar = ref('');
const defaultAvatar = '/path/to/default/avatar.jpg'; // 默认头像路径

const isAuth = ref(false);
isAuth.value = userStore.isAuthenticated;

const toLogin = () => {
  if (!isAuth.value) {
    router.push("/login");
  }
};

const viewProfile = () => {
  router.push('/user/perinfo');
};

const logout1 = async () => {
  const res = await logout();
  if (res.code === 200) {
    userStore.clearToken();
    localStorage.clear();
    location.reload();
  }
};

const searchBarWidth = ref("200px");

watch(() => window.innerWidth, () => {
  searchBarWidth.value = `${window.innerWidth / 4}px`;
});

onMounted(() => {
  searchBarWidth.value = `${window.innerWidth / 4}px`;
});
</script>

<style scoped>
.nav-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #f8f9fa;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: 40px;
}

.nav-bar-left {
  display: flex;
  align-items: center;
}

.nav-bar-left span {
  display: flex;
  align-items: center;
  width: 46px;
  height: 46px;
  margin-left: 10px;
  margin-right: 10px;
}

.nav-bar-center{
  display: flex;
  align-items: center;
  justify-content: center;
}

.avatar {
  cursor: pointer;
}
</style>

<template>
    <el-container class="container">  <!-- header -->
      <el-header class="el-header">
        <span>
          <router-link to="Home" class="el-link">
          <img src="../src/assets/images/logo.svg" alt="" width="24" height="24">
          </router-link>
        </span>
        <span><router-link to="Home" class="el-link">首页</router-link></span>
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
        <span id="user_state">
        <router-link v-if="!isLoggedIn" to="/login" class="el-link">用户登录</router-link>
        <span v-else>用户：{{ username }}</span>
      </span>
      </el-header>
    </el-container>

  <el-container>
    <el-aside >
      <!-- aside -->
      <el-menu>
        <!-- 在el-menu中修改背景颜色和字体颜色 -->
        <el-sub-menu index="1">
          <template #title>
            <i class="el-icon-arrow-right"></i>
            <span>菜单一</span>
          </template>
          <el-menu-item>
            <span>选项一</span>
          </el-menu-item>
          <el-menu-item>
            <span>选项二</span>
          </el-menu-item>
        </el-sub-menu>

          <el-sub-menu index="1-4">
            <template #title>
              <i class="el-icon-menu"></i>
              <span>菜单二</span>
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

    <!-- main -->
    <el-main>
      <router-view />
    </el-main>
  </el-container>



</template>

<script setup>
import "@element-plus/icons-vue"
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const isLoggedIn = computed(() => store.state.isLoggedIn)
const username = computed(() => store.state.username)

</script>

<style scoped>

.container{
  height: 62px;
}

.el-header{
  display: flex;
  align-items: center;
  height: 62px;
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
}

#search{
  width: auto;
  margin-left: auto;
  margin-right: auto;
}
#user_state{
  width: auto;
}
</style>
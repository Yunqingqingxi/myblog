<template>
  <div class="my-background"></div>
  <div class="common-layout" style="height: 1000px">
    <el-container>
      <el-header>
        <div class="top">
          <div class="logo">
            <ul class="left">
              <li class="title_style">
                <img
                    id="header"
                    src="../../public/images/home.svg"
                    alt="">
                <span> 个人博客</span>
              </li>
              <li class="v-title">
        <span>
        <router-link to="/Home" class="title_style">首页</router-link>
        </span>
              </li>
              <li class="v-title">
                <router-link to="/class" class="title_style">分类</router-link>
              </li>
              <li class="v-title">
                <router-link to="/tag" class="title_style">标签</router-link>
              </li>
              <li class="v-title">
                <router-link to="/archives" class="title_style">归档</router-link>
              </li>
              <li class="v-title">
                <router-link to="/about" class="title_style">关于我</router-link>
              </li>
            </ul>
            <ul class="center">
              <li>
                <form class="focus" id="search" style="border-radius: 8px 8px 0 0" >
                  <div id="search-content">
                    <input class="search-input" type="text" placeholder="搜索" >
                  </div>
                  <div class="search-btn">
                    <button style="width: 32px;height: 32px;">
                      <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.3451 15.2003C16.6377 15.4915 16.4752 15.772 16.1934 16.0632C16.15 16.1279 16.0958 16.1818 16.0525 16.2249C15.7707 16.473 15.4456 16.624 15.1854 16.3652L11.6848 12.8815C10.4709 13.8198 8.97529 14.3267 7.44714 14.3267C3.62134 14.3267 0.5 11.2314 0.5 7.41337C0.5 3.60616 3.6105 0.5 7.44714 0.5C11.2729 0.5 14.3943 3.59538 14.3943 7.41337C14.3943 8.98802 13.8524 10.5087 12.8661 11.7383L16.3451 15.2003ZM2.13647 7.4026C2.13647 10.3146 4.52083 12.6766 7.43624 12.6766C10.3517 12.6766 12.736 10.3146 12.736 7.4026C12.736 4.49058 10.3517 2.1286 7.43624 2.1286C4.50999 2.1286 2.13647 4.50136 2.13647 7.4026Z" fill="currentColor"></path>
                      </svg>
                    </button>
                  </div>
                </form>
              </li>
            </ul>
            <ul class="right">
              <li id="image">
          <span>
            <img
                src="../assets/imageDemo.jpg"
                style="width: 45px;height: 45px;top: 0"
                alt="">
          </span>
              </li>
              <li id="size">
                用户名
              </li>
            </ul>
          </div>
        </div>
      </el-header>
      <el-container>
        <div class="box-card" style="height: auto;width: 280px;position: fixed;margin-left: 10px;margin-top: 180px;border:2px solid black;border-radius: 5px">
          <el-aside style="margin: 20px">
            <el-card>
              <template #header>
                <div class="card-header">
                  <span>用户名</span>
                </div>
              </template>
              <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
              <template #footer>底部</template>
            </el-card>
          </el-aside>

        </div>
        <el-container>
          <el-main style="position: absolute;width: 1350px;height: 100%;margin-left: 300px;margin-top: 50px">
            <ul style="border:2px solid black;border-radius: 5px">
              <li>bbb</li>
            </ul>
          </el-main>
          <el-footer style="height: 100%;width: 100%;position: fixed;z-index: 1;margin-left: 300px;margin-top: 1000px;">
            <ul>
              <li>aaa</li>
            </ul>
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
  <div class="under_line">
    <div class="under_line_center">

    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 480px;
}
</style>

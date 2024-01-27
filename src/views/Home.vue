<template>
<div class="top">
  <div class="logo">
    <ul class="left">
      <li>
        <img
            id="header"
            src="../../public/images/home.svg"
            alt="">
        <span>个人博客</span>
      </li>
      <li class="v-title">
        <span>首页</span>
      </li>
      <li class="v-title">
        <span>分类</span>
      </li>
      <li class="v-title">
        <span>标签</span>
      </li>
      <li class="v-title">
        <span>归档</span>
      </li>
      <li class="v-title">
        <span>关于我</span>
      </li>
    </ul>
      <ul class="right">
        <li id="image">
          <span><img src="/images/home.svg" alt=""></span>
        </li>
        <li>

        </li>
      </ul>
  </div>
</div>
</template>

<script setup lang="ts">

</script>

<style>
.top{
  position: fixed;
  height: 45px;
  width: 100%;
  margin-left: 0;
  top:0;
  margin-bottom: 5px;
  background-color: cadetblue;
}
.logo{
  position: absolute;
  top: 0;
  z-index: auto;
  display: flex;
  justify-content: space-between;
  padding: 0 24px;
  max-width: 2560px;
  width: 100%;
  height: 40px;
}
#header{
  height: 20px;
  width: 20px;
  margin-left: 80px;
}
.left{
  display: flex;
  align-items: center;
  flex-shrink: 0;
  margin-right: 40px;
}
body ul{
  list-style-type: none;
}
body li{
  display: list-item;
  text-align: -webkit-match-parent;
}
body *{
  margin: 0;
  padding: 0;
}
.v-title{
  position: relative;
  margin: 20px;
}
.right{
  display: flex;
  align-items: center;
  margin-left: 50px;
  padding: 30px;
}
#image{
  position: relative;
  box-sizing: content-box;
  padding-right: 10px;
  width: 50px;
  height: 50px;
  cursor: pointer;
}
</style>

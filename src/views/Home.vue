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
                style="width: 45px;height: 45px"
                alt="">
          </span>
        </li>
        <li id="size">
          用户名
        </li>
      </ul>
  </div>
</div>
  <div class="my-background">
  </div>
</template>

<script setup lang="ts">

</script>

<style>
.my-background{
  position: fixed;
  width: 100%;
  height: 100%;
  background-image: url("../assets/preview.jpg");
  background-size: cover;
  background-color: #eaa2a1;
  opacity: 50%;

}
.top{
  z-index: 1;
  position: fixed;
  height: 55px;
  width: 100%;
  margin-left: 0;
  top:0;
  margin-bottom: 5px;
  background-color: cadetblue;
}
.logo{
  position: absolute;
  top: 10px;
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
.center{
  display: flex;
  align-items: center;
  height: auto;
  width: 700px;
  position: relative;

}
.focus{
  border: 1px;
  border-bottom: none;
  background: #fffafe;
}
#search{
  display: flex;
  align-items: center;
  padding: 0 18px 0 48px;
  position: relative;
  z-index: 1;
  overflow: hidden;
  line-height: 38;
  height: 40px;
  opacity: 9;
  transition: background-color.3s;
  background-color: cadetblue;
}
.right{
  display: flex;
  align-items: center;
  margin-right: 100px;
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
#search-content{
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 0 8px;
  width: 100%;
  height: 32px;
  border: 2px;
  border-radius: 6px;
}
.search-input{
  display: flex;
  align-items: center;
  padding: 0;
  border-radius: 5px;
  margin: 20px;
  width: 450px;
  height: 30px;
}
.search-btn{
  position: absolute;
  top:3px;
  right: 7px;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  width: 32px;
  height: 32px;
  border-radius: 6px;
  color: azure;
  line-height: 32px;
  cursor: pointer;
  transition: background-color.3s;
}
</style>

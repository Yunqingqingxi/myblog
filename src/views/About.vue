<template>

  <div>
    <h1>
      <button @click="bilibili">这是关于界面</button></h1>
  </div>
</template>

<script setup lang="ts">
const bilibili = () =>{
  window.location.replace("https://www.bilibili.com")
}
</script>

<style scoped>

</style>

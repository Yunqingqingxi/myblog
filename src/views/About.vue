<template>

  <div>
    <h1>
      <button @click="submit()">这是关于界面</button></h1>
      <p1>用户名：{{ username }}</p1><br>
      <p1>用户昵称：{{ nickname }}</p1><br>
  </div>
</template>

<script setup lang="ts">
import { getUserData } from '../api/user'
import { ref } from 'vue'


const username = ref('');
const nickname = ref('');

const submit = async () =>{
  
  console.log('token',localStorage.getItem('token'))
  const response = await getUserData();

  if(response.code == 200){
    username.value = response.data.username
    nickname.value = response.data.nick
  }else{
    console.log('fail')
  }
}
</script>

<style scoped>

</style>

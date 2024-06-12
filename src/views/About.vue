<template>

  <div>
    <h1>
      <button @click="submit()">这是关于界面</button></h1>
    <hr/>
      <p>用户名：{{ username }}</p><br>
      <p>用户昵称：{{ nickname }}</p><br>
  </div>
</template>

<script setup>
import { getUserData } from '@/api/user'
import { ref } from 'vue'
import { useRouter } from "vue-router";
import { ElMessage } from 'element-plus'
import {useUserStore} from "@/store/user.js";

const username = ref('');
const nickname = ref('');
const router = useRouter()
const store = useUserStore()

const submit = async () =>{
  const response = await getUserData();

  if(response.code === 200){
    username.value = response.data.username
    nickname.value = response.data.email
  }else{
    ElMessage.error("没有账号登录，请重新登录")
    if(response.msg === "令牌过期"){
      store.clearToken()
      window.location.reload()
    }
  }
}
</script>

<style scoped>

</style>

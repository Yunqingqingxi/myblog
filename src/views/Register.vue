<template>
  <div class="register">
    <div class="register_form">
      <h1>注册</h1>
  <el-form
      ref="ruleFormRef"
      label-width="auto"
      :model="formLabelAlign"
      :rules="rule"
      style="max-width: 600px"
  >
    <el-form-item label="账户" prop="username">
      <el-input v-model="formLabelAlign.username" style="width: 300px;"  />
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="formLabelAlign.password" show-password />
    </el-form-item>
    <el-form-item label="确认密码" prop="password">
      <el-input v-model="formLabelAlign.rePassword" show-password  />
    </el-form-item>
    <el-form-item label="邮箱" prop="email">
      <el-input v-model="formLabelAlign.email" />
    </el-form-item>
    <el-form-item label="手机号" prop="phone">
      <el-input v-model="formLabelAlign.phone" />
    </el-form-item>
    <el-form-item>
      <el-button @click="onRegister" style="width: 300px;margin-left: 30px;border-radius: 20px;background-color: cyan">确定</el-button>
    </el-form-item>
  </el-form>
  </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from 'vue-router'
import  { register,user } from "../api/user.js";
import {ElMessage} from "element-plus";
import {useUserStore} from "@/store/user.js";

const ruleFormRef = ref(null)
const router = useRouter()
const store = useUserStore()
const formLabelAlign = ref({
  username:'',
  password:'',
  rePassword:'',
  email:'',
  phone:''
})

const rule = ref({
  username:[
      {required: true,message:'未输入账号',trigger:"blur"},
  ],
  password:[{required: true,min:8,message:'未输入密码',trigger:'blur'}],
  rePassword:[
      {required:true,message:'未输入密码',trigger:'blur'}
  ],
  email:[{required: true,message:'未输入邮箱',trigger:'blur'}],
  phone:[{required: true,message:'未输入手机号',trigger:'blur'}],
})

const onRegister = async () => {
  if(!ruleFormRef.value) return

  if(formLabelAlign.value.password!==formLabelAlign.value.rePassword){
    ElMessage.error('两次密码不一致')
  }else {

    const res = await register(formLabelAlign.value);

    if (res.code === 200) {

      const token = res.data.token;
      store.setToken(token);

      ElMessage.success('注册成功')
      window.location.replace("/login")
    }

    if(res.code === 300){
      ElMessage.error(res.msg)
    }
    if(res.code === 301){
      ElMessage.error(res.msg)
    }
    if(res.code === 302){
      ElMessage.error(res.msg)
    }
    if(res.code === 500){
      ElMessage.error(res.msg)
    }
  }
}
</script>

<style scoped>
.register {
  position: fixed; /* 固定位置 */
  top: 50%; /* 垂直居中 */
  left: 50%; /* 水平居中 */
  transform: translate(-50%, -50%); /* 使用 transform 进行精确居中 */
  width: 100%; /* 宽度占满整个视口 */
  height: 100%; /* 高度占满整个视口 */
  display: flex;
  justify-content: center; /* 水平居中对齐 */
  align-items: center; /* 垂直居中对齐 */
  z-index: 1; /* 确保覆盖在其他内容之上 */
  background-color: white; /* 使用白色背景测试 */
}

.register_form {
  border-radius: 10px;
  border: solid #2e2e2e;
  backdrop-filter: blur(10px); /* 增加模糊效果 */
  padding: 20px; /* 增加内边距 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 添加阴影效果 */
  background-color: rgba(255, 255, 255, 0.9); /* 背景颜色透明度 */
}

.register h1 {
  text-align: center; /* 标题居中 */
}
</style>
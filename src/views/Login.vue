<template>
  <div class="login-overlay">
  <div class="login">
    <h1 style="text-align: center">登 录</h1>
  <el-form
      ref="ruleFormRef"
      style="max-width: 600px;"
      :model="ruleForm"
      status-icon
      :rules="rules"
      label-width="auto"
      class="demo-ruleForm"
  >
    <el-form-item label="账 号" prop="username">
      <el-input v-model="ruleForm.username" type="text" autocomplete="off" style="margin-right: 10px" />
    </el-form-item>
    <el-form-item label="密 码" prop="password">
      <el-input
          v-model="ruleForm.password"
          type="password"
          autocomplete="off"
          style="margin-right: 10px"
          :show-password=true
      />
    </el-form-item>
    <el-form-item label="验证码" prop="code" style="width: 300px;margin-left: 5px;">
      <el-input
          v-model="ruleForm.code"
          input-style="width: 20px;"
      />
      <div style="position: absolute;margin-left: 260px;margin-top: 9px;width: 320px">
        <img :src="verificationCode" alt="点击刷新验证码" width="80px" height="32px" @click="refreshCode()" style="cursor: pointer;"/>
      </div>
    </el-form-item>
<el-form-item>
  <router-link to="register" class="el-link" style="margin-left: auto">没有账号？点这里注册！</router-link>
</el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm()"  style="margin-left: 50px;width: 350px;">
        登录
      </el-button>
    </el-form-item>
  </el-form>
  </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { user } from '../api/user.js'
import { useRouter } from 'vue-router'
import { useTokenStore } from '../store/token' // 引入 token store

const ruleFormRef = ref(null)
const router = useRouter()
const tokenStore = useTokenStore() // 使用 token store

// 表单数据和验证规则
const ruleForm = ref({
  username: '',
  password: '',
  code: '',
})

const rules = ref({
  username: [
    { required: true, message: '请输入账号', trigger: 'blur' },
    { min: 8, max: 12, message: '长度为5-13位', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 8, message: '长度为8-12位', trigger: 'blur' },
  ],
  code: [{ required: true, message: '请输入验证码', trigger: 'blur' }]
})

const verificationCode = ref('http://localhost:8080/api/getCode') // 存储验证码图片的 URL

// 刷新验证码图片
const refreshCode = () => {
  // 通过修改 URL 触发重新加载验证码图片
  verificationCode.value = `http://localhost:8080/api/getCode?_=${Date.now()}`
}

// 页面加载时刷新验证码
refreshCode()

// 提交表单
const submitForm = async () => {
  if (!ruleFormRef.value) return

  try {
    await ruleFormRef.value.validate()
    
    // 发送登录请求
    const response = await user(ruleForm.value)
  
    if (response.code === 200) {
      const token = response.data.token
      localStorage.setItem('token', token)
      
      // 更新 Pinia 的 token store
      tokenStore.setToken(token)

      ElMessage.success('登录成功')
      await router.push('/')
      refreshCode() // 登录成功后刷新验证码
    } else {
      ElMessage.error(response.msg) // 这里需要使用 response.msg，因为后端返回的是 map，包含 code 和 msg 字段
      router.push('/login')
      refreshCode() // 登录失败后刷新验证码
    }
  } catch (error) {
    ElMessage.error(error)
    refreshCode()
  }
}

</script>

<style scoped>
.login-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white; /* 使用白色背景测试 */
  z-index: 1; /* 确保登录界面在顶部，比导航栏的 z-index 值小 */
}

.login {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 450px;
  height: 320px;
  border: 1px solid #ccc;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* 确保登录界面在遮罩之上 */
}

/* Your existing button styles */
.button {
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: 10px;
  width: 150px;
}
</style>

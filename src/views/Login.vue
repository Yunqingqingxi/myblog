<template>
  <div class="login">
    <h1 style="text-align: center">Login</h1>
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
      />
    </el-form-item>
    <el-form-item label="验证码" prop="code" style="width: 300px;margin-left: 5px;">
      <el-input
          v-model="ruleForm.code"
          input-style="width: 20px;"
      />
      <div style="position: absolute;margin-left: 260px;margin-top: 9px;width: 320px">
        <img :src="verificationCode" alt="验证码"  height="32px" @click="refreshCode()" style="cursor: pointer;"/>
      </div>

    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm()"  style="margin-left: 20px;width: 150px;">
        登录
      </el-button>
      <el-button @click="resetForm(ruleFormRef)" class="button">重置</el-button>
    </el-form-item>
  </el-form>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { login } from '../api/login'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

const ruleFormRef = ref(null)
const router = useRouter()
const store = useStore()

// 表单数据和验证规则
const ruleForm = ref({
  username: '',
  password: '',
  code: ''
})

const rules = ref({
  username: [{ required: true, message: '请输入账号', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
  code: [{ required: true, message: '请输入验证码', trigger: 'blur' }]
})

const verificationCode = ref('http://localhost:8080/api/generateVerificationCode') // 存储验证码图片的 URL

// 刷新验证码图片
const refreshCode = () => {
  // 通过修改 URL 触发重新加载验证码图片
  verificationCode.value = `http://localhost:8080/api/generateVerificationCode?_=${Date.now()}`
}

// 页面加载时刷新验证码
refreshCode()

// 提交表单
const submitForm = async () => {
  if (!ruleFormRef.value) return

  try {
    await ruleFormRef.value.validate()

    // 从页面上获取用户输入的验证码
    const userInputCode = ruleForm.value.code

    // 发送登录请求
    const response = await login(ruleForm.value)

    if (response.code === 200) {
      ElMessage.success('登录成功')
      store.commit('login', ruleForm.value.username) // 更新登录状态
      await router.push('/Home')
      refreshCode() // 登录成功后刷新验证码
    } else {
      ElMessage.error('登录失败')
      refreshCode() // 登录失败后刷新验证码
    }
  } catch (error) {
    ElMessage.error('请检查输入')
    refreshCode()
  }
}

// 重置表单
const resetForm = (formEl) => {
  if (!formEl) return
  formEl.resetFields()
}

</script>

<style scoped>
.login{
  position: absolute;
  width: 420px;
  height: 300px;
  border: 1px solid #ccc;
  border-radius: 10px;
}
.button{
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: 10px;
  width: 150px;
}
</style>

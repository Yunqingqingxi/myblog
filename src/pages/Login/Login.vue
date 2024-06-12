<template>
  <div class="page-container">
    <div class="login-container">
      <!-- 表单 -->
      <el-form
          hide-required-asterisk="true"
          ref="ruleFormRef"
          :model="ruleForm"
          status-icon
          :rules="rules"
          label-width="auto"
      >
        <h2 class="login-title">登 录</h2>
        <!-- 账号 -->
        <el-form-item label="账 号" prop="username">
          <el-input
              v-model="ruleForm.username"
              type="text"
              autocomplete="off"
              style="width: 330px;" />
        </el-form-item>
        <!-- 密码 -->
        <el-form-item label="密 码" prop="password">
          <el-input
              v-model="ruleForm.password"
              type="password"
              autocomplete="off"
              style="width: 330px"
              :show-password=true
          />
        </el-form-item>
        <!-- 验证码 -->
        <div>
          <el-form-item label="验证码" prop="code">
            <el-input
                v-model="ruleForm.code"
                style="width: 200px;"
            />
            <span>
           <img
               class="codeImg"
               :src="verificationCode"
               alt="点击刷新验证码"
               @click="refreshCode()"
           />
        </span>
          </el-form-item>
        </div>
        <!-- 注册 -->
        <div class="register-link">
          <el-form-item >
            <router-link to="register" >没有账号？点这里注册！</router-link>
          </el-form-item>
        </div>
        <!-- 登录按钮 -->
        <el-form-item>
          <el-button type="primary" @click="submitForm()" >
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
import { user } from '@/api/user.js'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/store/user.js' // 引入 token store

const ruleFormRef = ref(null)
const router = useRouter()
const tokenStore = useUserStore() // 使用 token store

// 表单数据和验证规则
const ruleForm = ref({
  username: '',
  password: '',
  code: '',
})

const rules = ref({
  username: [
    { required: true, message: '请输入账号', trigger: 'blur' },
    { min: 5, max: 13, message: '长度为5-13位', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
  ],
  code: [{ required: true, message: '请输入验证码', trigger: 'blur' }]
})

// 提交表单
const submitForm = async () => {
  if (!ruleFormRef.value) return

  try {
    await ruleForm.value.validate()

    // 发送登录请求
    const response = await user(ruleForm.value)

    if (response.code === 200) {
      const token = response.data.token
      tokenStore.setToken(token) // 更新token

      ElMessage.success('登录成功')
      await router.push('/')
    } else {
        ElMessage.error(response.msg) // 这里需要使用 response.msg，因为后端返回的是 map，包含 code 和 msg 字段
        await router.push('/login')
        refreshCode() // 登录失败后刷新验证码
    }
  } catch (error) {
    ElMessage.error("未填写信息")
    refreshCode()
  }
}


// 验证码图片
const verificationCode = ref('/api/user/getCode') // 存储验证码图片的 URL

const refreshCode = () => {
  // 通过修改 URL 触发重新加载验证码图片
  verificationCode.value = `/api/user/getCode?_=${Date.now()}`
  ruleForm.value.code='';
}
refreshCode()
</script>

<style scoped>
.page-container {
  display: flex;
  justify-content: center; /* 将内容水平居中 */
  align-items: center; /* 垂直居中对齐 */
  height: 100vh; /* 高度占满整个页面 */
  animation: backgroundFlow 5s linear infinite, lightEffect 2s linear infinite alternate, backgroundFade 5s linear infinite alternate; /* 添加背景渐变和光效动画 */
}

/* 背景流动动画 */
@keyframes backgroundFlow {
  0% {
    background-position: -200% 50%; /* 初始背景颜色位于屏幕左侧外 */
  }
  100% {
    background-position: 200% 50%; /* 背景颜色移动到屏幕右侧外 */
  }
}

/* 光效动画 */
@keyframes lightEffect {
  0% {
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.4); /* 初始光效 */
  }
  50% {
    box-shadow: 0 0 50px rgba(255, 255, 255, 0.6); /* 光效增强 */
  }
  100% {
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.8); /* 光效恢复 */
  }
}

/* 背景渐变动画 */
@keyframes backgroundFade {
  0% {
    background: linear-gradient(to right, #f7c5b3, #ffb1b1); /* 初始背景 */
  }
  100% {
    background: linear-gradient(to right, #ffb1b1, #f7c5b3); /* 结束背景 */
  }
}

/* 登录容器样式 */
.login-container {
  width: 400px; /* 设置登录表单的宽度 */
  padding: 40px; /* 添加内边距 */
  border-radius: 20px; /* 设置边框圆角 */
  background: transparent; /* 背景全透明 */
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2); /* 添加阴影效果 */
  animation: lightEffect1 2s linear infinite alternate; /* 添加光效动画 */
}

/* 登录标题样式 */
.login-title {
  margin-bottom: 20px; /* 减小底部边距 */
  text-align: center; /* 文字居中 */
  color: #333; /* 字体颜色 */
}

/* 光效动画 */
@keyframes lightEffect1 {
  0% {
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.5); /* 初始光效 */
  }
  25% {
    box-shadow: 5px 5px 20px rgba(255, 255, 255, 0.7); /* 右下 */
  }
  50% {
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.5); /* 光效增强 */
  }
  75% {
    box-shadow: -5px -5px 20px rgba(255, 255, 255, 0.7); /* 左上 */
  }
  100% {
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.5); /* 光效恢复 */
  }
}

/* 图片验证码样式 */
.codeImg {
  cursor: pointer;
  margin-left: 10px; /* 调整左边距 */
  width: 120px; /* 调整宽度 */
  height: auto; /* 自动调整高度 */
  border-radius: 5px; /* 添加边框圆角 */
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1); /* 添加轻微阴影效果 */
}

/* 注册链接样式 */
.register-link {
  display: flex;
  justify-content: flex-end; /* 右对齐 */
}

/* 登录按钮样式 */
.el-button{
  border-radius: 20px; /* 设置圆角 */
  width: 100%; /* 按钮宽度铺满 */
  background-color: #ff6e6e; /* 登录按钮背景颜色 */
}

</style>

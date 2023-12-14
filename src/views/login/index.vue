<template>
  <div class="login-container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form
          class="login_form"
          :model="loginForm"
          :rules="rules"
          ref="formCheck"
        >
          <h1>标题1</h1>
          <h2>次级标题2</h2>
          <el-form-item prop="username">
            <el-input :prefix-icon="User" v-model="loginForm.username" />
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              type="password"
              :prefix-icon="Lock"
              v-model="loginForm.password"
              :show-password="true"
            />
          </el-form-item>
          <el-form-item>
            <el-button
              :loading="btnLoading"
              :disabled="btnSend"
              class="login_btn"
              type="primary"
              @click="login"
            >
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue'
import { ref, reactive } from 'vue'
//引入store
import useUserStore from '@/store/modules/user.ts'
//引入router
import { useRouter } from 'vue-router'
import { ElNotification } from 'element-plus'

import getTime from '@/utils/time'
//控制变量加载
let btnLoading = ref(false)

let loginForm = reactive({ username: '', password: '' })
let $router = useRouter()

let btnSend = ref(false)
let formCheck = ref()

const userStore = useUserStore()
let timeMsg = getTime()
//登录按钮回调
const login = async () => {
  await formCheck.value.validate()

  btnLoading.value = true
  btnSend.value = true
  //通知仓库发送请求
  //登录成功--》跳转页面
  //登录成功--》显示仓库信息
  try {
    await userStore.userLogin(loginForm)
    //编程式导航跳转
    $router.push('/')
    //登录成功提示
    ElNotification({
      type: 'success',
      message: '登录成功',
      title: 'hi，' + timeMsg + '好',
    })
    btnLoading.value = false
    btnSend.value = false
  } catch (error) {
    ElNotification({
      type: 'error',
      message: (error as Error).message,
    })
    btnLoading.value = false
    btnSend.value = false
  }
}

//自定义校验规则函数
const validatorUserName = (_: any, value: any, callback: any) => {
  //rule:即为校验规则对象
  //value:即为表单元素文本内容
  //函数:如果符合条件callBack放行通过即为
  //如果不符合条件callBack方法,注入错误提示信息
  if (value.length >= 5) {
    callback()
  } else {
    callback(new Error('账号长度至少五位'))
  }
}

const validatorPassword = (_: any, value: any, callback: any) => {
  if (value.length >= 6) {
    callback()
  } else {
    callback(new Error('密码长度至少六位'))
  }
}

const rules = {
  username: [
    // { required: true, message: '用户名不能为空', trigger: 'blur' },
    // { min: 3, max: 5, message: '长度为3-5位', trigger: 'blur' },
    { trigger: 'change', validator: validatorUserName },
  ],
  password: [
    // { required: true, message: '密码不能为空', trigger: 'blur' }
    { trigger: 'change', validator: validatorPassword },
  ],
}
</script>

<style lang="scss">
.login-container {
  width: 100%;
  // width: 100vh;
  height: 100vh;
  background: url('@/assets/images/background.jpg') no-repeat;
  background-size: cover;

  .login_form {
    position: relative;
    width: 80%;
    top: 30vh;
    background: url('@/assets/images/login_form.png') no-repeat;
    background-size: cover;
    padding: 40px;

    h1 {
      color: white;
      font-size: 40px;
    }

    h2 {
      font-size: 20px;
      color: white;
      margin-top: 20px;
      margin-bottom: 20px;
    }

    .login_btn {
      width: 100%;
    }
  }
}
</style>

<template>
  <div class="login-panel">
    <h2 class="title">后台管理系统</h2>
    <el-tabs type="border-card" class="demo-tabs" stretch v-model="currentTab">
      <el-tab-pane name="account">
        <template #label>
          <el-icon>
            <edit></edit>
          </el-icon>
          账号登录
        </template>
        <login-account ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <el-icon>
            <edit></edit>
          </el-icon>
          手机登录
        </template>
        <login-phone />
      </el-tab-pane>
    </el-tabs>
    <div class="login-control">
      <el-checkbox v-model="isSavePassword" label="记住密码" size="large" />
      <el-link type="primary">忘记密码</el-link>
    </div>
    <div>
      <el-button class="btn" type="primary" @click="handlerLogin"
        >立即登录</el-button
      >
    </div>
  </div>
</template>
<script lang="ts" setup>
import loginAccount from './login-account.vue'
import loginPhone from './login-phone.vue'

import { ref } from 'vue'
const isSavePassword = ref(true)
const currentTab = ref('account')
const accountRef = ref<InstanceType<typeof loginAccount>>()
// const phoneRef = ref<InstanceType<typeof loginPhone>>()

const handlerLogin = () => {
  if (currentTab.value === 'account') {
    accountRef.value?.loginAction(isSavePassword.value)
  } else {
    // phoneRef.value?.loginAction(isSavePassword.value)
  }
}
</script>
<style lang="less" scoped>
.title {
  text-align: center;
  margin-bottom: 15px;
}
.login-control {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.btn {
  width: 100%;
}
</style>

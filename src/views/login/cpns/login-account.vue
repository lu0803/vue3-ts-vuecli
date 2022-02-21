<template>
  <div class="login-account">
    <el-form :model="account" :rules="rules" ref="formRef">
      <el-form-item label="用户名" prop="name">
        <el-input v-model="account.name" placeholder="请输入用户名" />
      </el-form-item>
      <el-form-item label="密&nbsp;&nbsp;&nbsp;码" prop="password">
        <el-input
          v-model="account.password"
          placeholder="请输入密码"
          show-password
        />
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { ElForm } from 'element-plus/lib/components'
import { rules } from '../config/login-config'
import localCache from 'src/utils/cache'

export default defineComponent({
  setup() {
    const store = useStore()
    const account = reactive({
      name: null,
      password: null
    })

    const formRef = ref<InstanceType<typeof ElForm>>()

    const loginAction = (isSavePassword: boolean) => {
      formRef.value?.validate((valid) => {
        if (valid) {
          if (isSavePassword) {
            localCache.setCache('name', account.name)
            localCache.setCache('password', account.password)
          } else {
            localCache.deleteCache('name')
            localCache.deleteCache('password')
          }
          store.dispatch('login/accountLoginAction', { ...account })
        }
      })
    }

    return {
      account,
      formRef,
      rules,
      loginAction
    }
  }
})
</script>
<style lang="less" scoped></style>

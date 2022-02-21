<template>
  <div class="login-account">
    <el-form ref="">
      <el-form-item label="手机号">
        <el-input placeholder="请输入手机号" />
      </el-form-item>
      <el-form-item label="验证码">
        <div class="code">
          <el-input placeholder="请输入验证码" />
          <el-button class="get-code" type="primary">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import { ElForm } from 'element-plus/lib/components'
export default defineComponent({
  setup() {
    const phoneRef = ref<InstanceType<typeof ElForm>>()
    const loginAction = () => {
      phoneRef.value?.validate((valid) => {
        if (valid) {
          console.log('手机登录')
        }
      })
    }

    return {
      phoneRef,
      loginAction
    }
  }
})
</script>
<style lang="less" scoped>
.code {
  display: flex;
  align-items: center;
  justify-content: space-between;
  .get-code {
    margin-left: 8px;
  }
}
</style>

<template>
  <div class="login">
    <login-panel />
  </div>
</template>
<script lang="ts" setup>
import loginPanel from './cpns/login-panel.vue'
</script>
<style lang="less" scoped>
.login {
  width: 340px;
  position: relative;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>

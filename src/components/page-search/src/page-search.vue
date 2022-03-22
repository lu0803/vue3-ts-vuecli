<template>
  <div class="page-search">
    <hy-form v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h1 class="header">高级检索</h1>
      </template>
      <template #footer>
        <div class="footer-btns">
          <el-button>重置</el-button>
          <el-button type="primary">搜索</el-button>
        </div>
      </template>
    </hy-form>
  </div>
</template>
<script lang="ts" setup>
import { reactive, defineProps, PropType } from 'vue'
import HyForm, { IFormItem } from '@/base-ui/form'

defineProps({
  searchFormConfig: Object as PropType<IFormItem>
})
const formData = reactive({
  id: '',
  name: '',
  password: '',
  sport: '',
  createTime: ''
})
</script>
<style lang="less" scoped>
.header {
  color: red;
  text-align: center;
}
.footer-btns {
  display: flex;
  justify-content: flex-end;
  padding: 0 30px 20px 0;
}
</style>

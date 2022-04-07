<template>
  <div class="page-search">
    <!-- <hy-form v-bind="searchFormConfig" v-model="formData"> -->
    <hy-form
      v-bind="searchFormConfig"
      :modelValue="formData"
      @update:modelValue="(newValue) => (formData = newValue)"
    >
      <template #header>
        <h1 class="header">高级检索</h1>
      </template>
      <template #footer>
        <div class="footer-btns">
          <el-button @click="handleResetClick">重置</el-button>
          <el-button type="primary">搜索</el-button>
        </div>
      </template>
    </hy-form>
  </div>
</template>
<script lang="ts" setup>
import { reactive, defineProps, watch } from 'vue'
import HyForm from '@/base-ui/form'

const Props = defineProps({
  searchFormConfig: {
    type: Object,
    required: true
  }
})
const formItems = Props.searchFormConfig?.formItems ?? []
const formOriginData: any = {}
for (const item of formItems) {
  formOriginData[item.field] = ''
}
let formData = reactive(formOriginData)
// 重置按钮
const handleResetClick = () => {
  console.log()
}
watch(
  formData,
  (newValue) => {
    console.log(newValue)
  },
  {
    deep: true
  }
)
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

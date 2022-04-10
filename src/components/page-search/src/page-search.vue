<template>
  <div class="page-search">
    <hy-form v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h1 class="header">高级检索</h1>
      </template>
      <template #footer>
        <div class="footer-btns">
          <el-button @click="handleResetClick">重置</el-button>
          <el-button type="primary" @click="handleSearchClick">搜索</el-button>
        </div>
      </template>
    </hy-form>
  </div>
</template>
<script lang="ts" setup>
import { ref, defineProps, defineEmits } from 'vue'
import HyForm from '@/base-ui/form'

const Props = defineProps({
  searchFormConfig: {
    type: Object,
    required: true
  }
})
const Emits = defineEmits(['resetSearch', 'search'])
const formItems = Props.searchFormConfig?.formItems ?? []
const formOriginData: any = {}
for (const item of formItems) {
  formOriginData[item.field] = ''
}
let formData = ref({ ...formOriginData })
// 重置按钮
const handleResetClick = () => {
  for (const key in formOriginData) {
    formData.value[key] = formOriginData[key]
  }
  Emits('resetSearch')
}
// 搜索按钮
const handleSearchClick = () => {
  Emits('search', formData.value)
}
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
  border-bottom: 15px solid #f3f1f7;
}
</style>

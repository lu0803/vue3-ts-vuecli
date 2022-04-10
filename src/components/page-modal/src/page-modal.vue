<template>
  <div class="page-modal">
    <el-dialog v-model="dialogVisible" title="新建用户" width="30%" center>
      <hy-table v-bind="modalConfig" v-model="formData"></hy-table>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="dialogVisible = false"
            >确定</el-button
          >
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script lang="ts" setup>
import HyTable from '@/base-ui/form'
import { ref, defineProps, defineExpose, watch } from 'vue'
const Props = defineProps({
  modalConfig: {
    type: Object,
    required: true
  },
  defaultInfo: {
    type: Object,
    required: true
  }
})
const dialogVisible = ref(false)
const formData = ref<any>({})
watch(
  () => Props.defaultInfo,
  (newValue) => {
    for (const item of Props.modalConfig.formItems) {
      formData.value[item.field] = newValue[item.field]
    }
  },
  { deep: true, immediate: true }
)
defineExpose({ dialogVisible })
</script>
<style lang="less" scoped></style>

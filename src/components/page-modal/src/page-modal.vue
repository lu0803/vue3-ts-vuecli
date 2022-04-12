<template>
  <div class="page-modal">
    <el-dialog v-model="dialogVisible" title="新建用户" width="30%" center>
      <hy-table
        v-if="dialogVisible"
        v-bind="modalConfig"
        v-model="formData"
      ></hy-table>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleConfirmClick">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script lang="ts" setup>
import HyTable from '@/base-ui/form'
import { ref, watch, defineProps, defineExpose } from 'vue'
import { useStore } from 'vuex'
const Props = defineProps({
  modalConfig: {
    type: Object,
    required: true
  },
  defaultInfo: {
    type: Object,
    required: true
  },
  pageName: String
})

const dialogVisible = ref(false)
const formData = ref<any>({})

const store = useStore()
const handleConfirmClick = () => {
  dialogVisible.value = false
  if (Object.keys(Props.defaultInfo.value).length) {
    // 编辑
    store.dispatch('system/editPageDataAction', {
      pageName: Props.pageName,
      editData: { ...formData.value },
      id: Props.defaultInfo.value.id
    })
  } else {
    // 新建
    store.dispatch('system/createPageDataAction', {
      pageName: Props.pageName,
      createData: { ...formData.value }
    })
  }
}

watch(
  () => Props.defaultInfo,
  (newValue) => {
    for (const item of Props.modalConfig.formItems) {
      formData.value[item.field] = newValue[item.field]
    }
  },
  {
    deep: true
  }
)
defineExpose({ dialogVisible })
</script>
<style lang="less" scoped></style>

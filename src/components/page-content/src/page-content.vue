<template>
  <div class="page-content">
    <hy-table
      style="width: 100%"
      v-bind="contentTableConfig"
      :tableList="userListData"
      :listCount="listCount"
      v-model:page="pageInfo"
    >
      <template #header-control>
        <div v-if="isCreate">
          <el-button type="primary" @click="handlNewBtnClick"
            >新建用户</el-button
          >
        </div>
      </template>
      <template #status="scoped">
        <el-button
          :type="scoped.row.enable ? 'success' : 'danger'"
          size="small"
          plain
        >
          {{ scoped.row.enable ? '启用' : '禁用' }}</el-button
        >
      </template>
      <template #createAt="scoped">
        {{ $filters.formatTime(scoped.row.updateAt) }}
      </template>
      <template #updateAt="scoped">
        {{ $filters.formatTime(scoped.row.updateAt) }}
      </template>
      <template
        v-for="item in otherPropSlots"
        :key="item.slotName"
        #[item.slotName]="scoped"
      >
        <slot :name="item.slotName" :row="scoped.row"></slot>
      </template>
      <template #handler="scoped">
        <div class="handle-btns">
          <el-button
            type="text"
            size="small"
            v-if="isUpdate"
            @click="handlEditBtnClick(scoped.row)"
            >编辑</el-button
          >
          <el-button
            type="text"
            size="small"
            v-if="isDelete"
            @click="handlDeleteBtnClick"
            >删除</el-button
          >
        </div>
      </template>
    </hy-table>
  </div>
</template>
<script lang="ts" setup>
import {
  ref,
  computed,
  watch,
  defineProps,
  defineEmits,
  defineExpose
} from 'vue'
import { useStore } from 'vuex'
import HyTable from '@/base-ui/table'
import { usePermission } from '@/hooks/usePermission'

const Props = defineProps({
  contentTableConfig: {
    type: Object,
    required: true
  },
  pageName: {
    type: String,
    required: true
  }
})

const Emits = defineEmits(['newBtnClick', 'editBtnClick'])
const store = useStore()

const isCreate = usePermission(Props.pageName, 'create')
const isUpdate = usePermission(Props.pageName, 'update')
const isDelete = usePermission(Props.pageName, 'delete')
const isQuery = usePermission(Props.pageName, 'query')

// 3. 页面分页
const pageInfo = ref({ currentPage: 0, pageSize: 10 })
// 1. 发送获取页面数据请求
const getPageData = (info?: any) => {
  if (!isQuery) return
  store.dispatch('system/getPageListAction', {
    pageName: Props.pageName,
    queryInfo: {
      offset: pageInfo.value.currentPage * pageInfo.value.pageSize,
      size: pageInfo.value.pageSize,
      ...info
    }
  })
}
getPageData()
// 2. 获取页面数据
const userListData = computed(() =>
  store.getters[`system/pageListData`](Props.pageName)
)
const listCount = computed(() =>
  store.getters[`system/pageListTotal`](Props.pageName)
)

// 4. 获取其他的动态插槽
const otherPropSlots = Props.contentTableConfig?.propList.filter(
  (item: any) => {
    if (item.slotName === 'status') return false
    if (item.slotName === 'createAt') return false
    if (item.slotName === 'updateAt') return false
    if (item.slotName === 'handler') return false
    return true
  }
)

// 按钮事件
const handlDeleteBtnClick = () => {
  console.log('删除按钮')
}
const handlNewBtnClick = () => {
  Emits('newBtnClick')
}
const handlEditBtnClick = (row: any) => {
  Emits('editBtnClick', row)
}

watch(pageInfo, () => {
  getPageData()
})
// 暴露组件属性/方法
defineExpose({ getPageData })
</script>
<style lang="less" scoped>
.page-content {
  padding: 20px;
}
</style>

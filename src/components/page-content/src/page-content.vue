<template>
  <div class="page-content">
    <hy-table
      style="width: 100%"
      v-bind="contentTableConfig"
      :tableList="userListData"
    >
      <template #header-control>
        <div>
          <el-button type="primary">新建用户</el-button>
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
      <template #handler>
        <div class="handle-btns">
          <el-button type="text" size="small">编辑</el-button>
          <el-button type="text" size="small">删除</el-button>
        </div>
      </template>
      <template #footer>
        <el-pagination
          v-model:currentPage="currentPage4"
          v-model:page-size="pageSize4"
          :page-sizes="[100, 200, 300, 400]"
          :small="small"
          :disabled="disabled"
          :background="background"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </template>
    </hy-table>
  </div>
</template>
<script lang="ts" setup>
import { defineProps, computed } from 'vue'
import { useStore } from 'vuex'
import HyTable from '@/base-ui/table'

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
const store = useStore()
store.dispatch('system/getPageListAction', {
  pageName: Props.pageName,
  queryInfo: {
    offset: 0,
    size: 10
  }
})
const userListData = computed(() =>
  store.getters[`system/pageListData`](Props.pageName)
)
</script>
<style lang="less" scope>
.page-content {
  padding: 20px;
  border-top: 15px solid #f5f5f5;
}
</style>

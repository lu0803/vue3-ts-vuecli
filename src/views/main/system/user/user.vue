<template>
  <div class="user">
    <page-search :searchFormConfig="searchFormConfig" />
    <div class="content">
      <hy-table
        :tableList="userListData"
        :propList="propList"
        :showColumnIndex="true"
        :showSelectColumn="true"
        @selectChange="tableSelectChange"
        title="用户列表"
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
  </div>
</template>
<script lang="ts" setup>
import pageSearch from '@/components/page-search'
import { searchFormConfig } from './config/search.config'
import { useStore } from 'vuex'
import { computed } from 'vue'
import HyTable from '@/base-ui/table'

const store = useStore()
store.dispatch('system/getUserList', {
  url: '/users/list',
  queryInfo: {
    offset: 0,
    size: 10
  }
})
const propList = [
  { prop: 'id', label: 'ID', minWidth: '100' },
  { prop: 'name', label: '用户名', minWidth: '100' },
  { prop: 'realname', label: '姓名', minWidth: '100' },
  { prop: 'enable', label: '状态', minWidth: '100', slotName: 'status' },
  {
    prop: 'createAt',
    label: '创建时间',
    minWidth: '100',
    slotName: 'createAt'
  },
  {
    prop: 'updateAt',
    label: '更新时间',
    minWidth: '100',
    slotName: 'updateAt'
  },
  { label: '操作', minWidth: '120', slotName: 'handler' }
]
const userListData = computed(() => store.state.system.userList)
const tableSelectChange = (value: any) => {
  console.log(value, '====')
}
</script>
<style lang="less" scoped>
.user {
  background: #fff;
}
.content {
  padding: 20px;
  border-top: 15px solid #f5f5f5;
}
</style>

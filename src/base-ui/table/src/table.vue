<template>
  <div class="table">
    <div class="header">
      <slot name="header">
        <div class="table-title">{{ title }}</div>
        <div class="header-ctl">
          <slot name="header-control"></slot>
        </div>
      </slot>
    </div>
    <el-table
      :data="tableList"
      border
      @selection-change="selectionChange"
      v-bind="childrenProps"
    >
      <el-table-column
        v-if="showSelectColumn"
        type="selection"
        align="center"
      ></el-table-column>
      <el-table-column
        v-if="showColumnIndex"
        type="index"
        width="50"
        align="center"
      ></el-table-column>
      <el-table-column
        v-for="item in propList"
        :key="item.id"
        :prop="item.prop"
        :label="item.label"
        align="center"
        :width="item.minWidth"
        :show-overflow-tooltip="showOverflow"
      >
        <template #default="scoped">
          <slot :name="item.slotName" :row="scoped.row">
            {{ scoped.row[item.prop] }}
          </slot>
        </template>
      </el-table-column>
    </el-table>
    <div class="footer">
      <slot name="footer">
        <el-pagination
          v-if="showFooter"
          :currentPage="page.currentPage"
          :page-size="page.pageSize"
          :page-sizes="[10, 20, 50, 100]"
          layout="total, sizes, prev, pager, next, jumper"
          :total="listCount"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </slot>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue'

const Props = defineProps({
  tableList: {
    type: Array,
    required: true
  },
  propList: {
    type: Array,
    required: true
  },
  showColumnIndex: {
    type: Boolean,
    default: false
  },
  showSelectColumn: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: '信息详情'
  },
  page: {
    type: Object,
    default: () => ({ pageSize: 10, currentPage: 1 })
  },
  listCount: Number,
  showFooter: {
    type: Boolean,
    default: true
  },
  childrenProps: {
    type: Object,
    default: () => ({})
  },
  showOverflow: {
    type: Boolean,
    default: false
  }
})
const Emits = defineEmits(['selectChange', 'update:page'])
const selectionChange = (value: any) => {
  Emits('selectChange', value)
}
const handleSizeChange = (pageSize: number) => {
  Emits('update:page', { ...Props.page, pageSize })
}
const handleCurrentChange = (currentPage: number) => {
  Emits('update:page', { ...Props.page, currentPage })
}
</script>
<style lang="less" scoped>
.header {
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
}
.footer {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
</style>

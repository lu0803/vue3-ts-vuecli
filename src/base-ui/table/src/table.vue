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
    <el-table :data="tableList" border @selection-change="selectionChange">
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
      >
        <template #default="scoped">
          <slot :name="item.slotName" :row="scoped.row">
            {{ scoped.row[item.prop] }}
          </slot>
        </template>
      </el-table-column>
    </el-table>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue'

defineProps({
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
  }
})
const Emits = defineEmits(['selectChange'])
const selectionChange = (value: any) => {
  Emits('selectChange', value)
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

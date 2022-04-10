<template>
  <div class="goods">
    <page-content :contentTableConfig="contentFormConfig" pageName="goods">
      <template #image="scoped">
        <el-image
          style="width: 60px; height: 80px"
          :src="scoped.row.imgUrl"
          :preview-src-list="[scoped.row.imgUrl]"
        />
      </template>
      <template #oldPrice="scoped">
        <span>{{ `￥${scoped.row.oldPrice}` }}</span>
      </template>
    </page-content>
  </div>
</template>
<script lang="ts" setup>
import PageContent from '@/components/page-content'
import { contentFormConfig } from './config/content.config'
</script>
<style lang="less" scoped>
.goods {
  background: #fff;
}
.el-flow-form .el-card_body {
  z-index: initial !important;
}
</style>

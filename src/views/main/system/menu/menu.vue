<template>
  <div class="menu">
    <page-content
      :contentTableConfig="contentFormConfig"
      pageName="menu"
    ></page-content>
  </div>
</template>
<script lang="ts" setup>
import PageContent from '@/components/page-content'
import { contentFormConfig } from './config/content.config'
</script>
<style lang="less" scoped>
.menu {
  background: #fff;
}
</style>

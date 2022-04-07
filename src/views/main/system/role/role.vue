<template>
  <div class="role">
    <page-search :searchFormConfig="searchFormConfig" />
    <page-content
      :contentTableConfig="contentFormConfig"
      pageName="role"
    ></page-content>
  </div>
</template>
<script lang="ts" setup>
import pageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import { searchFormConfig } from './config/search.config'
import { contentFormConfig } from './config/content.config'
</script>
<style lang="less" scoped>
.role {
  background: #fff;
}
</style>

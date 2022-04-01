<template>
  <div class="user">
    <page-search :searchFormConfig="searchFormConfig" />
    <page-content
      :contentTableConfig="contentFormConfig"
      pageName="user"
    ></page-content>
  </div>
</template>
<script lang="ts" setup>
import pageSearch from '@/components/page-search'
import pageContent from '@/components/page-content'
import { searchFormConfig } from './config/search.config'
import { contentFormConfig } from './config/content.config'
</script>
<style lang="less" scoped>
.user {
  background: #fff;
}
</style>

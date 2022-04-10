<template>
  <div class="user">
    <page-search
      :searchFormConfig="searchFormConfig"
      @resetSearch="handleResetClick"
      @search="handleQeuryClick"
    />
    <page-content
      ref="pageContentRef"
      :contentTableConfig="contentFormConfig"
      pageName="users"
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
    ></page-content>
    <page-modal
      ref="pageModelRef"
      :modalConfig="modalConfig"
      :defaultInfo="defaultInfo"
    ></page-modal>
  </div>
</template>
<script lang="ts" setup>
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'
import { searchFormConfig } from './config/search.config'
import { contentFormConfig } from './config/content.config'
import { modalConfig } from './config/modal.config'
import { usePageSearch } from '@/hooks/usePageSearch'
import { usePageModal } from '@/hooks/usePageModal'
const [pageContentRef, handleResetClick, handleQeuryClick] = usePageSearch()
const [pageModelRef, defaultInfo, handleNewData, handleEditData] =
  usePageModal()
</script>
<style lang="less" scoped>
.user {
  background: #fff;
}
</style>

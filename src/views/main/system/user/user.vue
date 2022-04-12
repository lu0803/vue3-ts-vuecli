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
      :modalConfig="modalConfigComputed"
      :defaultInfo="defaultInfo"
      pageName="users"
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
import { computed, watch } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const modalConfigComputed = computed(() => {
  const departmentItem = modalConfig.formItems.find(
    (item) => item.field === 'departmentId'
  )

  const roleItem = modalConfig.formItems.find((item) => item.field === 'roleId')

  departmentItem!.options = store.state.entireDepartment.map((item: any) => {
    return { label: item.name, value: item.id }
  })
  roleItem!.options = store.state.entireRole.map((item: any) => {
    return { label: item.name, value: item.id }
  })
  return modalConfig
})

const [pageContentRef, handleResetClick, handleQeuryClick] = usePageSearch()

const newCallback = () => {
  const passwordItem = modalConfig.formItems.find(
    (item) => item.field === 'password'
  )
  passwordItem!.isHidden = false
}
const editCallback = () => {
  const passwordItem = modalConfig.formItems.find(
    (item) => item.field === 'password'
  )
  passwordItem!.isHidden = true
}
const [pageModelRef, defaultInfo, handleNewData, handleEditData] = usePageModal(
  newCallback,
  editCallback
)
</script>
<style lang="less" scoped>
.user {
  background: #fff;
}
</style>

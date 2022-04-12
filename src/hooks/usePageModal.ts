import { ref } from 'vue'
import PageModal from '@/components/page-modal'

type callbackType = () => void

export function usePageModal(newCb?: callbackType, editCb?: callbackType) {
  const pageModelRef = ref<InstanceType<typeof PageModal>>()
  const defaultInfo = ref({})
  const handleNewData = () => {
    defaultInfo.value = {}
    pageModelRef.value.dialogVisible = true
    newCb && newCb()
  }
  const handleEditData = (row: any) => {
    defaultInfo.value = { ...row }
    pageModelRef.value.dialogVisible = true
    editCb && editCb()
  }
  return [pageModelRef, defaultInfo, handleNewData, handleEditData]
}

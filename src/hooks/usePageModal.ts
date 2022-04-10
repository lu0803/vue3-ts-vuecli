import { ref } from 'vue'
import PageModal from '@/components/page-modal'
export function usePageModal() {
  const pageModelRef = ref<InstanceType<typeof PageModal>>()
  const defaultInfo = ref({})
  const handleNewData = () => {
    pageModelRef.value.dialogVisible = true
  }
  const handleEditData = (row: any) => {
    defaultInfo.value = { ...row }
    pageModelRef.value.dialogVisible = true
  }
  return [pageModelRef, defaultInfo, handleNewData, handleEditData]
}

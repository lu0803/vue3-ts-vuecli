import { ref } from 'vue'
import PageContent from '@/components/page-content'

export function usePageSearch() {
  const pageContentRef = ref<InstanceType<typeof PageContent>>()
  const handleResetClick = () => {
    pageContentRef.value?.getPageData()
  }

  const handleQeuryClick = (qeuryInfo: any) => {
    pageContentRef.value?.getPageData(qeuryInfo)
  }

  return [pageContentRef, handleResetClick, handleQeuryClick]
}

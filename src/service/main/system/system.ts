import foxRequest from '../../index'
import { IDateType } from '../../types'

export function getPageListDate(url: string, queryInfo: any) {
  return foxRequest.post<IDateType>({
    url: url,
    data: queryInfo
  })
}

export function deletePageData(url: string) {
  return foxRequest.delete<IDateType>({ url })
}

export function createPageData(url: string, createData: any) {
  return foxRequest.post<IDateType>({
    url,
    data: createData
  })
}

export function editPageData(url: string, editData: any) {
  return foxRequest.patch<IDateType>({
    url,
    data: editData
  })
}

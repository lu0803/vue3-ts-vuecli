import foxRequest from '../../index'
import { IDateType } from '../../types'

export function getPageListDate(url: string, queryInfo: any) {
  return foxRequest.post<IDateType>({
    url: url,
    data: queryInfo
  })
}

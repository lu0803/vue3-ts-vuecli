import { ILoginState } from './login/types'
export interface IRootState {
  name: string
  age: any
  entireDepartment: any[]
  entireRole: any[]
}

export interface IRootWithModule {
  login: ILoginState
}

export type IStoreType = IRootState & IRootWithModule

import { AxiosResponse } from 'axios'

import foxRequest from '../index'
import { IAccount, IDateType, ILoginResult } from './type'

enum LoginAPI {
  AccountLogin = '/login',
  userInfo = '/users',
  UserMenus = '/role/'
}

export function accountLoginRequest(account: IAccount) {
  return foxRequest.post<AxiosResponse<IDateType<ILoginResult>>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}

export function requestUserInfoById(id: number) {
  return foxRequest.get<AxiosResponse>({
    url: LoginAPI.userInfo + `/${id}`
  })
}

export function requestUserMenusByRoleId(id: number) {
  return foxRequest.get<AxiosResponse<IDateType>>({
    url: LoginAPI.UserMenus + id + '/menu'
  })
}

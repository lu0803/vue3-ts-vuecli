import foxRequest from '../index'
import { IAccount, ILoginResult } from './type'
import { IDateType } from '../types'

enum LoginAPI {
  AccountLogin = '/login',
  userInfo = '/users',
  UserMenus = '/role/'
}

export function accountLoginRequest(account: IAccount) {
  return foxRequest.post<IDateType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}

export function requestUserInfoById(id: number) {
  return foxRequest.get<IDateType>({
    url: LoginAPI.userInfo + `/${id}`
  })
}

export function requestUserMenusByRoleId(id: number) {
  return foxRequest.get<IDateType>({
    url: LoginAPI.UserMenus + id + '/menu'
  })
}

import { Module } from 'vuex'

import { ILoginState } from './types'
import { IRootState } from '../types'
import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenusByRoleId
} from '@/service/login'
import localCache from '@/utils/cache'
import router from '@/router'
import { mapMenusToRoutes, mapMenusToPermissions } from '@/utils/mapMenu'

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: null,
      permissions: []
    }
  },
  getters: {},
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    changeUserMenus(state, menus: any) {
      state.userMenus = menus
      const routes = mapMenusToRoutes(menus)
      routes.forEach((route) => {
        router.addRoute('main', route)
      })
      // 获取用户权限
      const permissions = mapMenusToPermissions(menus)
      state.permissions = permissions
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: any) {
      const loginResult = await accountLoginRequest(payload)
      const { id, token } = loginResult.data
      commit('changeToken', token)
      localCache.setCache('token', token)

      const userResult = await requestUserInfoById(id)
      const userInfo = userResult.data
      commit('changeUserInfo', userInfo)
      localCache.setCache('userInfo', userInfo)
      const userMenusResult = await requestUserMenusByRoleId(userInfo.id)
      const menus = userMenusResult.data
      commit('changeUserMenus', menus)
      localCache.setCache('userMenus', menus)
      router.push('/main')
    },
    loadLocalLogin({ commit }) {
      const token = localCache.getCache('token')
      if (token) {
        commit('changeToken', token)
      }
      const userInfo = localCache.getCache('userInfo')
      if (userInfo) {
        commit('changeUserInfo', userInfo)
      }
      const userMenusResult = localCache.getCache('userMenus')
      const userMenus = userMenusResult
      if (userMenus) {
        commit('changeUserMenus', userMenus)
      }
    }
  }
}

export default loginModule

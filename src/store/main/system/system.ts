import { Module } from 'vuex'
import { IRootState } from '@/store/types'
import { ISystemState } from './types'
import { getPageListDate } from '@/service/main/system/system'

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      usersList: [],
      usersCount: 0,
      roleList: [],
      roleCount: 0,
      goodsList: [],
      goodsCount: 0,
      menuList: [],
      menuCount: 0
    }
  },
  mutations: {
    changeUsersList(state, usersList: any[]) {
      state.usersList = usersList
    },
    changeUsersCount(state, usersCount: number) {
      state.usersCount = usersCount
    },
    changeRoleList(state, roleList: any[]) {
      state.roleList = roleList
    },
    changeRoleCount(state, roleCount: number) {
      state.roleCount = roleCount
    },
    changeGoodsList(state, goodsList: any[]) {
      state.goodsList = goodsList
    },
    changeGoodsCount(state, goodsCount: number) {
      state.goodsCount = goodsCount
    },
    changeMenuList(state, menuList: any[]) {
      state.menuList = menuList
    },
    changeMenuCount(state, menuCount: number) {
      state.menuCount = menuCount
    }
  },
  actions: {
    async getPageListAction({ commit }, payload: any) {
      const pageName =
        payload.pageName[0].toUpperCase() + payload.pageName.slice(1)
      const pageUrl = `/${pageName}/list`
      const pageResult = await getPageListDate(pageUrl, payload.queryInfo)
      const { list, totalCount } = pageResult.data
      commit(`change${pageName}List`, list)
      commit(`change${pageName}Count`, totalCount)
    }
  },
  getters: {
    pageListData(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}List`]
      }
    },
    pageListTotal(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}Count`]
      }
    }
  }
}

export default systemModule

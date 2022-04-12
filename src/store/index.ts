import { createStore, Store, useStore as useVuexStore } from 'vuex'

import { IRootState, IStoreType } from './types'
import login from './login/login'
import system from './main/system/system'

import { getPageListDate } from '@/service/main/system/system'

const store = createStore<IRootState>({
  state() {
    return {
      name: 'zs',
      age: 18,
      entireDepartment: [],
      entireRole: []
    }
  },
  mutations: {
    changeEntireDepartment(state, payload) {
      state.entireDepartment = payload
    },
    changeEntireRole(state, payload) {
      state.entireRole = payload
    }
  },
  actions: {
    async getInitialDataActions({ commit }) {
      // 1. 请求部门和角色数据
      const departmentResult = await getPageListDate('/department/list', {
        offset: 0,
        size: 1000
      })
      const roleResult = await getPageListDate('/role/list', {
        offset: 0,
        size: 1000
      })
      const departmentList = departmentResult.data.list
      const roleList = roleResult.data.list

      commit('changeEntireDepartment', departmentList)
      commit('changeEntireRole', roleList)
    }
  },
  modules: {
    login,
    system
  }
})

export function setupStore() {
  store.dispatch('login/loadLocalLogin')
  store.dispatch('getInitialDataActions')
}

export function useStore(): Store<IStoreType> {
  return useVuexStore()
}

export default store

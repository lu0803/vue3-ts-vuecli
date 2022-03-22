<template>
  <div class="nav-header">
    <el-icon class="fold-menu" @click="handlerFold">
      <svg
        class="icon"
        width="200"
        height="200"
        viewBox="0 0 1024 1024"
        xmlns="http://www.w3.org/2000/svg"
        v-if="isFold"
      >
        <path
          fill="currentColor"
          d="M128 192h768v128H128V192zm0 256h512v128H128V448zm0 256h768v128H128V704zm576-352l192 160-192 128V352z"
        ></path>
      </svg>
      <svg
        class="icon"
        width="200"
        height="200"
        viewBox="0 0 1024 1024"
        xmlns="http://www.w3.org/2000/svg"
        v-else
      >
        <path
          fill="currentColor"
          d="M896 192H128v128h768V192zm0 256H384v128h512V448zm0 256H128v128h768V704zM320 384L128 512l192 128V384z"
        ></path>
      </svg>
    </el-icon>
    <div class="control">
      <nav-breadcrumb :breadcrumbs="breadcrumbs"></nav-breadcrumb>
      <user-info></user-info>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, defineEmits, computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import navBreadcrumb from '@/base-ui/breadcrumb'
import userInfo from './user-inof.vue'
import { pathMapBreadcrumbs } from '@/utils/mapMenu'

const isFold = ref(false)

const emits = defineEmits(['foldChange'])

const handlerFold = () => {
  isFold.value = !isFold.value
  emits('foldChange', isFold.value)
}

// 面包屑的数据：[{name, path}]
const store = useStore()
const breadcrumbs = computed(() => {
  const route = useRoute()
  const currentPath = route.path
  const menus = store.state.login.userMenus
  return pathMapBreadcrumbs(menus, currentPath)
})
</script>
<style lang="less" scoped>
.nav-header {
  width: 100%;
  display: flex;
  align-items: center;
  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }
  .control {
    margin: 0 20px;
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>

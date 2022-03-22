<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="~@/assets/img/logo.svg" alt="logo" />
      <span class="title" v-if="!collapse">VUE3 + TS</span>
    </div>
    <el-menu
      :default-active="defaultValue"
      :collapse="collapse"
      class="el-menu-vertical"
      background-color="#011629"
      text-color="#FFF"
      active-text-color="#fff"
      :collapse-transition="true"
    >
      <template v-for="item in userMenus" :key="item.id">
        <template v-if="item.type === 1">
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <!-- <i v-if="item.icon" :class="item.icon"></i> -->
              <el-icon v-if="item.icon">
                <svg
                  class="icon"
                  width="200"
                  height="200"
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                  data-v-042ca774=""
                >
                  <path
                    fill="currentColor"
                    d="M800 416a288 288 0 10-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 01704 0c0 149.312-117.312 330.688-352 544z"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M512 512a96 96 0 100-192 96 96 0 000 192zm0 64a160 160 0 110-320 160 160 0 010 320z"
                  ></path>
                </svg>
              </el-icon>
              <span>{{ item.name }}</span>
            </template>
            <template v-for="subItem in item.children" :key="subItem.id">
              <el-menu-item
                :index="subItem.id + ''"
                @click="handleMenuItemClick(subItem)"
              >
                <i v-if="subItem.icon" :class="subItem.icon"></i>
                <span>{{ subItem.name }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <template v-else-if="item.type === 2">
          <el-menu-item :index="item.id + ''">
            <i v-if="item.icon" :class="item.icon"></i>
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>
<script lang="ts" setup>
import { computed, defineProps, ref } from 'vue'
import { useStore } from '@/store'
import { useRouter, useRoute } from 'vue-router'
import { pathMapToMenu } from '@/utils/mapMenu'

defineProps({
  collapse: {
    type: Boolean,
    defualt: false
  }
})

// store
const store = useStore()
const userMenus = computed(() => store.state.login.userMenus)
// router
const router = useRouter()
const route = useRoute()
const currentPath = route.path

// data
const menu = pathMapToMenu(userMenus.value, currentPath)
const defaultValue = ref(menu.id + '')

// event handle
const handleMenuItemClick = (item: any) => {
  router.push({
    path: item.url ?? '/not-found'
  })
}
</script>
<style lang="less" scoped>
.nav-menu {
  width: 100%;
  height: 100%;
  background-color: #0c2136;
  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 0;
    .img {
      width: 25px;
      height: 25px;
    }
    .title {
      font-size: 14px;
      font-weight: 700;
      color: white;
      margin-left: 10px;
    }
  }
}
.el-menu {
  border-right: none;
  .el-sub-menu {
    background: #001529 !important;
    .el-menu-item {
      padding-left: 50px !important;
      background-color: #0c2135 !important;
    }
    .is-active {
      background: #0b61be !important;
    }
  }
}
</style>

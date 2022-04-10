<template>
  <div class="user-info">
    <el-dropdown>
      <div class="dropdown-control">
        <el-icon :size="26">
          <svg
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
            data-v-ba633cb8=""
          >
            <path
              fill="currentColor"
              d="M628.736 528.896A416 416 0 0 1 928 928H96a415.872 415.872 0 0 1 299.264-399.104L512 704l116.736-175.104zM720 304a208 208 0 1 1-416 0 208 208 0 0 1 416 0z"
            ></path>
          </svg>
        </el-icon>
        <span>{{ username }}</span>
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>修改密码</el-dropdown-item>
          <el-dropdown-item divided @click="handlerLogOut">
            退出登录
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const username = ref(store.state.login.userInfo.name)

const handlerLogOut = () => {
  console.log('退出登录')
}
</script>
<style lang="less" scoped>
.dropdown-control {
  display: flex;
  align-items: center;
}
</style>

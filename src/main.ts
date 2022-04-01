import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { setupStore } from './store'

import { registerApp } from './global'
import 'normalize.css'
import '@/assets/style/base.css'

import zhCn from 'element-plus/es/locale/lang/zh-cn'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)

registerApp(app)
app.use(ElementPlus, { locale: zhCn })
app.use(store)
setupStore()
app.use(router)
app.mount('#app')

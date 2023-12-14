import { createApp } from 'vue'
import './style.css'
import App from '@/App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

//svg插件配置代码
import 'virtual:svg-icons-register'

//注册全局组件
import allGlabal from '@/components'

//注册全局样式
import '@/styles/index.scss'

//注册模板路由
import router from '@/router'

//引入store
import pinia from '@/store'

const app = createApp(App)

app.use(ElementPlus, {
  locale: zhCn,
})
app.use(allGlabal)
app.use(router)
app.use(pinia)

app.mount('#app')

// import { reqLogin } from './api/user'
// reqLogin({
//   username: 'admin',
//   password: '1234565',
// })

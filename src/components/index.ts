//注册全局组件
import SvgIcon from '@/components/Svgicon.vue'
const allGlobalComponent = {
  SvgIcon,
}
export default {
  install(app) {
    console.log('install')

    console.log(app)

    Object.keys(allGlobalComponent).forEach((key) => {
      app.component(key, allGlobalComponent[key])
    })
  },
}

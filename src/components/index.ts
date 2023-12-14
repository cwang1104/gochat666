//注册全局组件
import SvgIcon from '@/components/Svgicon.vue'
const allGlobalComponent: Record<string, any> = {
  SvgIcon,
}
export default {
  install(app: any) {
    Object.keys(allGlobalComponent).forEach((key) => {
      app.component(key, allGlobalComponent[key])
    })
  },
}

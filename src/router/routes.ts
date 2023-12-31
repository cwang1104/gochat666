//常量路由
import { RouteRecordRaw } from 'vue-router'
export const constantRoute = <Array<RouteRecordRaw>>[
  {
    //登录
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'login',
  },
  //登录成功后跳转
  {
    path: '/',
    component: () => import('@/views/home/index.vue'),
    name: 'home',
    redirect: '/chat',
    children: [
      {
        path: '/chat',
        component: () => import('@/views/chat/index.vue'),
        name: 'chatHome',
      },
    ],
  },
  {
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    name: '404',
  },
  {
    path: '/:pathMatch(.*)',
    redirect: '/404',
    name: 'Any',
  },
]

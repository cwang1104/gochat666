import request from '@/utils/request.ts'

//只引入类型，而不引入具体代码
import type { loginForm, loginResponseData } from './type'

enum API {
  LOGIN_URL = '/user/login',
  USERINFO_URL = '/user/info',
}

export const reqLogin = (data: loginForm) =>
  request.post<any, loginResponseData>(API.LOGIN_URL, data)

export const reqUserInfo = (data: any) =>
  request.get<any, any>(API.USERINFO_URL, data)

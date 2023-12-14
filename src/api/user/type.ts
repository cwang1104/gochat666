export interface loginForm {
  username: string
  password: string
}

interface dataType {
  token: string
}

export interface loginResponseData {
  code: number
  msg: string
  data?: dataType
}

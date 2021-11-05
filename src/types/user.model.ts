import { CurrencyValue } from './money.model'

export interface UserToLogin {
  email: string
  password: string
  rememberMe: boolean
}

export interface UserResponseWithJWT {
  token?: string
  user: UserPublicInfo
}

export interface UserPublicInfo {
  id: string
  email: string
  money: Array<CurrencyValue>
  marketer: UserStatePublicInfo
  influencer: UserStatePublicInfo
}

export interface UserStatePublicInfo {
  firstName: string
  lastName: string
  description: string
  avatarSimpleAccessFile: SimpleAccessFile
  rating: number
  moneyTransferred: number
  location?: string
  registerDate: string
}

export interface SimpleAccessFile {
  id: string
  filename: string
  size: number
  signedUrl: string
}

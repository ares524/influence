import { CurrencyValue } from './money.model'
import { Platform } from '@/types/platform.model'

export interface TaskInfoToCreate {
  title: string
  description: string
  budget: CurrencyValue
  platforms: Array<Platform>
  filesIds: Array<string>
}

export interface TaskErrInfoToCreate {
  title: ErrorType
  description: ErrorType
  budget: ErrorType
}

export interface GetTaskResponse {
  tasks: Array<CreateTaskResponse>
  count: number
}

export interface CreateTaskResponse {
  id: string
  addedTime: string
  title: string
  description: string
  budget: CurrencyValue
  proposalCount: number
  platforms: Array<Platform>
  proposalAlreadySent: boolean
  addedByMe: boolean
  hasContractCreated: boolean
  hasContractAccepted: boolean
  files: Array<SimpleAccessFile>
  marketerInfo: UserStatePublicInfo
}

export interface UserStatePublicInfo {
  firstName: string
  lastName: string
  description: string
  avatarSimpleAccessFile: SimpleAccessFile
  rating: string
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

export interface ErrorType {
  status: boolean
  msg: string
}

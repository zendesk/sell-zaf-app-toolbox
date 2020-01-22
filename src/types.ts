export interface Metadata<T> {
  appId: number
  name: string
  version: string
  installationId: number
  settings: T
}

export enum AppLocation {
  dealCard = 'deal_card',
  leadCard = 'lead_card',
  personCard = 'person_card',
  companyCard = 'company_card',
  modal = 'modal',
  background = 'background',
}

export interface Context {
  // eq. "sell"
  product: string
  // location where the app is supposed to show up
  location: AppLocation
  // uniq instance id
  instanceGuid: string
  // account info
  account: AccountContext
  // user info
  currentUser: UserContext
}

export interface AccountContext {
  domain: string
  currency: string
  timezone: string
  numberFormat: string
  timeFormat: string
  dateFormat: string
  decimalSeparator: string
}

export interface UserContext {
  locale: string
}

export enum FeedbackStatus {
  success = 'success',
  error = 'error',
  loading = 'loading',
}

export interface Feedback {
  status: FeedbackStatus
  error?: any | void
}

export interface ClientResponse {
  data: string | null
  error: object | null
  feedback: Feedback | null
}

export interface Response<T> {
  data: T | null
  error: object | null
  feedback: Feedback | null
}

export interface Client {
  on: (event: string, callback: () => void) => void
  invoke: <T>(name: string, ...options: any[]) => Promise<T>
  get: <T>(name: string | string[]) => Promise<T>
  set: <T>(name: string, value: string) => Promise<T>
  request: <Input, Output>(data: Input) => Promise<Output>
  metadata: <T>() => Promise<Metadata<T>>
  context: () => Promise<Context>
  trigger: (event: string) => void
  instance: (Guid: string) => Client
}

export enum ClientInvokeOptions {
  accountTimezone = 'account',
  formatDate = 'formatDate',
  formatDateAndTime = 'formatDateAndTime',
  formatCurrency = 'formatCurrency',
}

export const version = '0.0.5'

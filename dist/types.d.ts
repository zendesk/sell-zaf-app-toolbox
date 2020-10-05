export interface Metadata<T> {
    appId: number;
    name: string;
    version: string;
    installationId: number;
    settings: T;
}
export declare enum AppLocations {
    dealCard = "deal_card",
    leadCard = "lead_card",
    personCard = "person_card",
    companyCard = "company_card",
    modal = "modal"
}
export declare type AppLocation = 'deal_card' | 'lead_card' | 'person_card' | 'company_card' | 'modal';
export interface Context {
    product: string;
    location: AppLocation;
    instanceGuid: string;
    account: AccountContext;
    currentUser: UserContext;
}
export interface AccountContext {
    subdomain: string;
    currency: string;
    timezone: string;
    numberFormat: string;
    timeFormat: string;
    dateFormat: string;
    decimalSeparator: string;
}
export interface UserContext {
    locale: string;
}
export declare enum FeedbackStatus {
    success = "success",
    error = "error",
    loading = "loading"
}
export interface Feedback {
    status: FeedbackStatus;
    error?: any | void;
}
export interface ClientResponse {
    data: string | null;
    error: object | null;
    feedback: Feedback | null;
}
export interface Response<T> {
    data: T | null;
    error: object | null;
    feedback: Feedback | null;
}
export interface Client {
    on: <T>(event: string, callback: (data?: T) => void) => void;
    invoke: <T>(name: string, ...options: any[]) => Promise<T>;
    get: <T>(name: string | string[]) => Promise<T>;
    set: <T>(name: string, value: string) => Promise<T>;
    request: <Input, Output>(data: Input) => Promise<Output>;
    metadata: <T>() => Promise<Metadata<T>>;
    context: () => Promise<Context>;
    trigger: (event: string) => void;
    instance: (Guid: string) => Client;
}
export declare enum ClientInvokeOptions {
    accountTimezone = "account",
    formatDate = "formatDate",
    formatDateAndTime = "formatDateAndTime",
    formatCurrency = "formatCurrency"
}
export declare const version = "0.0.5";
export interface ChangedProperty<T> {
    propertyName: string;
    oldValue: T;
    newValue: T;
}

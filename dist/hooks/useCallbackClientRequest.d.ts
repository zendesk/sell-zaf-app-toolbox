import { CallbackRequestResponse } from '../types';
export interface Options<T> {
    [key: string]: any;
    transformResponse?: (response: T, currentData: T | null) => T;
    skip?: boolean;
}
export declare function useCallbackClientRequest<T>(url: string, options?: Options<T>, dependencies?: any[], cacheKey?: string): CallbackRequestResponse<T>;
export default useCallbackClientRequest;

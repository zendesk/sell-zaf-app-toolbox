import { Response } from '../types';
export interface Options<T> {
    [key: string]: any;
    transformResponse?: (response: T, currentData: T | null) => T;
    skip?: boolean;
}
export declare function useClientRequest<T>(url: string, options?: Options<T>, dependencies?: any[], cacheKey?: string): Response<T>;
export default useClientRequest;

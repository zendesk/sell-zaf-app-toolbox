import { Response } from '../types';
interface Options<T> {
    [key: string]: any;
    transformResponse?: (response: T, currentData: T | null) => T;
}
export declare function useClientRequest<T>(url: string, options: Options<T>, dependencies?: any[], cacheKey?: string): Response<T>;
export default useClientRequest;

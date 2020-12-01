import { Response } from '../types';
import { Options } from './useClientRequest';
export declare function useClientRequestWithAuth<T extends {}>(url: string, options?: Options<T>, dependencies?: any[], cacheKey?: string): Response<T>;
export default useClientRequestWithAuth;

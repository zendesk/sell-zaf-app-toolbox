import { Response } from '../types';
export declare function useClientRequestWithAuth<T extends {}>(url: string, options?: object, dependencies?: any[], cacheKey?: string): Response<T>;
export default useClientRequestWithAuth;

import { Response } from '../types';
interface Options {
    skip?: boolean;
}
export declare function useClientGet<T>(path: string, dependencies?: any[], options?: Options): Response<T>;
export default useClientGet;

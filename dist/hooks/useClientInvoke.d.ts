import { Feedback } from '../types';
export declare function useClientInvoke<T>(name: string, ...options: any[]): {
    data: T | null;
    error: object | null;
    feedback: Feedback | null;
};
export default useClientInvoke;

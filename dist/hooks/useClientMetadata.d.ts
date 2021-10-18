import { ClientMetadataResponse } from '../types';
interface Options {
    skip?: boolean;
}
export declare function useClientMetadata<T>(dependencies?: any[], options?: Options): ClientMetadataResponse<T>;
export default useClientMetadata;

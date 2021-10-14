/// <reference types="react" />
import { Response } from '../types';
declare type StatusCheck = (response: Response<any>) => boolean;
export declare const isLoading: StatusCheck;
export declare const hasError: StatusCheck;
export declare const isEmpty: StatusCheck;
export declare function createCheckResponse<T>(responseArray: Array<Response<T>>): (check: StatusCheck, customCheck?: StatusCheck | undefined) => Response<T> | undefined;
interface Props<T> {
    children: (data: T[]) => JSX.Element | null;
    response?: Response<T>;
    responses?: Array<Response<T>>;
    loadingView?: JSX.Element | null;
    emptyView?: JSX.Element | null;
    errorView?: ((error: object) => JSX.Element) | JSX.Element | null;
    isEmpty?: StatusCheck;
    isLoading?: StatusCheck;
    hasError?: StatusCheck;
}
export declare function ResponseHandler({ children, response, responses, loadingView, emptyView, errorView, isEmpty: customIsEmpty, isLoading: customIsLoading, hasError: customHasError, }: Props<any>): JSX.Element | null;
export default ResponseHandler;

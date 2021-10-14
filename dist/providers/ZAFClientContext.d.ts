import React from 'react';
import { Client } from '../types';
export declare const ZAFClientContext: React.Context<Client | undefined>;
export declare const useZAFClient: () => Client | undefined;
export declare const ZAFClientContextProvider: React.ProviderExoticComponent<React.ProviderProps<Client | undefined>>;

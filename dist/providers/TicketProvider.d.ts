import React from 'react';
import { TicketContext } from '../types';
declare const TicketContext: React.Context<TicketContext>;
declare const TicketProvider: React.FC;
declare const useTicketInfo: () => TicketContext;
export { TicketProvider, useTicketInfo };

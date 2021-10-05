import React from 'react';
interface TicketContextData {
    id: number;
    subject: string;
    description: string;
    type: string;
}
declare const TicketProvider: React.FC;
declare const useTicketInfo: () => TicketContextData;
export { TicketProvider, useTicketInfo };

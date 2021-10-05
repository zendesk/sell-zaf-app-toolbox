import React from 'react';
interface UserContextData {
    id: number;
    name: string;
    email: string;
    role: string;
}
declare const UserProvider: React.FC;
declare const useCurrentUser: () => UserContextData;
export { UserProvider, useCurrentUser };

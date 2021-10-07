import React from 'react';
import { UserContext } from '../types';
declare const UserContext: React.Context<UserContext>;
declare const UserProvider: React.FC;
declare const useCurrentUser: () => UserContext;
export { UserProvider, useCurrentUser };

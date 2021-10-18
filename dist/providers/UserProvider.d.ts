import React from 'react';
import { User } from '../types';
declare const UserContext: React.Context<User>;
declare const UserProvider: React.FC;
declare const useCurrentUser: () => User;
export { UserContext, UserProvider, useCurrentUser };

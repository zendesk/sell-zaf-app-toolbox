import React from 'react';
import { Organization } from '../types';
declare const OrganizationContext: React.Context<Organization>;
declare const OrganizationProvider: React.FC;
declare const useOrganizationInfo: () => Organization;
export { OrganizationContext, OrganizationProvider, useOrganizationInfo };

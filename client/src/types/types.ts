import { z } from 'zod';
import { newCompany, newOrg } from '../validators/validators.js';

//re-export new company
export type NewCompany = z.infer<typeof newCompany>;

//a base menu definition
export interface IMenuItem {
  key: string;
  value: string;
}

export type NewOrganization = z.infer<typeof newOrg>;

import { z } from 'zod';
import { newCompany, newDept, newOrg } from '../validators/validators.js';

//re-export new company
export type NewCompany = z.infer<typeof newCompany>;

//a base menu definition
export interface IMenuItem {
  key: string;
  value: string;
}

//a parent child menu definition
//i.e.  {parent: 'acme_companyId', key: 'name', value: 'acme co department A'}
export interface IMenuPC extends IMenuItem {
  parent: string | undefined | null;
}

export type NewOrganization = z.infer<typeof newOrg>;
export type NewDepartment = z.infer<typeof newDept>;

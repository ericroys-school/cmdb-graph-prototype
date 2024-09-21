import { CompanyActionType } from '../../actions/company/company.js';
import { Company } from '../../graphTypes/graphql.js';
import { IMenuItem } from '../types.js';

type CompanyItem = Pick<
  Company,
  'name' | 'description' | 'instanceId' | 'isMarkedDelete' | 'type'
>;
type CompanyMenuState = {
  status: CompanyMenuStatus;
  data: IMenuItem[];
  error: string | undefined | null;
};

export const enum CompanyMenuStatus {
  IDLE = 'idle',
  LOADING = 'loading',
  FAILED = 'failed',
  DONE = 'done',
}

type CompanyMenuAction = {
  type: CompanyActionType;
  data?: IMenuItem[];
};

type DispatchType = (args: CompanyMenuAction) => CompanyMenuAction;
export type { CompanyMenuState, CompanyMenuAction, DispatchType, CompanyItem };

import { OrgMenuActionType } from '../../actions/organization/organization';
import { Organization } from '../../graphTypes/graphql';
import { IMenuPC } from '../types';

type OrganizationItem = Pick<
  Organization,
  'name' | 'description' | 'instanceId' | 'isMarkedDelete' | 'company'
>;

type OrganizationItemShort = Omit<OrganizationItem, 'company'>;

type OrgMenuState = {
  status: OrgMenuStatus;
  data: IMenuPC[];
  error: string | undefined | null;
};

export const enum OrgMenuStatus {
  IDLE = 'idle',
  LOADING = 'loading',
  FAILED = 'failed',
  DONE = 'done',
}

type OrgMenuAction = {
  type: OrgMenuActionType;
  data?: IMenuPC[];
};

type DispatchType = (args: OrgMenuAction) => OrgMenuAction;
export type {
  OrgMenuState,
  OrgMenuAction,
  DispatchType,
  OrganizationItem,
  OrganizationItemShort,
};

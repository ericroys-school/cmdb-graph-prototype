import { Department } from '../../graphTypes/graphql';

type DepartmentItem = Pick<
  Department,
  'name' | 'description' | 'instanceId' | 'isMarkedDelete' | 'organization'
>;

type DepartmentItemShort = Omit<DepartmentItem, 'organization'>;

export type { DepartmentItem, DepartmentItemShort };

import { gql } from '../graphTypes/gql';

export const GET_IPS = gql(`
  query GetIPs {
    ips {
      instanceId
      address
    }
  }
`);

export const GET_ALL_COMPANY_IDS = gql(`
  query GetAllCompanyIds($where: CompanyWhere) {
    companies(where: $where) {
      name
      instanceId
    }
  }
`);

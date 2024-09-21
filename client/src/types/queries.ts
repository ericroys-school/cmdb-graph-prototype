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

export const GET_ALL_COMPANY_WITH_OPTIONS = gql(`
query GetAllCompanyWithOptions($where: CompanyWhere, $options: CompanyOptions){
  companies(where: $where, options: $options) {
    name
    instanceId
    assetTag
    cost
    description
    isMarkedDelete
    type
  }
}
`);

export const GETCOMPANIES = gql(` 
query GetCompanies($where: CompanyWhere, $options: CompanyOptions){
  companies(where: $where, options: $options) {
    name
    instanceId
    assetTag
    cost
    description
    isMarkedDelete
    type
  }
}
`);

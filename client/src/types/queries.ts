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

export const GET_COMPANYORG_IDS = gql(`
query GetOrgsForCompany($where: OrganizationWhere){
  organizations(where: $where){
    name
    instanceId
    company{
      instanceId
    }
  }
}
`);

export const GET_ALL_COMPANY_WITH_OPTIONS = gql(`
query GetAllCompanyWithOptions($where: CompanyWhere, $options: CompanyOptions){
  companies(where: $where, options: $options) {
    name
    instanceId
    description
    isMarkedDelete
    type
  }
}
`);

export const GET_COMPANIES = gql(` 
query GetCompanies($where: CompanyWhere, $options: CompanyOptions){
  companies(where: $where, options: $options) {
    name
    type
    description
    instanceId
    isMarkedDelete
    organization {
      company {
        name
        instanceId
      }
    }
    organizationConnection {
      totalCount
    }
  }
}
`);

export const GET_ORGANIZATIONS_SHORT = gql(`
  query GetOrganizationsShort($where: OrganizationWhere, $options: OrganizationOptions) {
    organizations(where: $where, options: $options) {
      name
      instanceId
      description
      isMarkedDelete
    }
  }
`);

export const GET_ORGANIZATIONS = gql(`
query GetOrganizations($where: OrganizationWhere, $options: OrganizationOptions) {
  organizations(where: $where, options: $options) {
    name
    instanceId
    description
    isMarkedDelete
    company {
      name
      instanceId
    }
    departments {
      name
      instanceId
    }
  }
}
`);

export const GET_DEPARTMENTS_SHORT = gql(`
query GetDepartmentsShort($where: DepartmentWhere, $options: DepartmentOptions) {
  departments(where: $where, options: $options) {
    name
    instanceId
    description
    isMarkedDelete
  }
}
`);

export const GET_DEPARTMENTS = gql(`
query GetDepartments($where: DepartmentWhere, $options: DepartmentOptions) {
  departments(where: $where, options: $options) {
    name
    instanceId
    description
    isMarkedDelete
    organization {
      name
      instanceId
    }
  }
}
`);

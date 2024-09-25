/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation createCompany($input: [CompanyCreateInput!]!) {\n    createCompanies(input: $input) {\n      companies {\n        name\n        instanceId\n      }\n    }\n  }\n": types.CreateCompanyDocument,
    "\n  mutation createOrganization($input: [OrganizationCreateInput!]!) {\n    createOrganizations(input: $input) {\n      organizations {\n        name\n        description\n        company {\n          name\n        }\n      }\n    }\n  }\n": types.CreateOrganizationDocument,
    "\n  mutation createDepartment($input: [DepartmentCreateInput!]!) {\n    createDepartments(input: $input) {\n      departments {\n        name\n        instanceId\n        description\n        organization {\n          instanceId\n          name\n        }\n      }\n    }\n  }\n": types.CreateDepartmentDocument,
    "\n  mutation createPerson($input: [PersonCreateInput!]!) {\n    createPeople(input: $input) {\n      people {\n        firstName\n        lastName\n        instanceId\n        department {\n          name\n          instanceId\n        }\n      }\n    }\n  }\n": types.CreatePersonDocument,
    "\n  query GetIPs {\n    ips {\n      instanceId\n      address\n    }\n  }\n": types.GetIPsDocument,
    "\n  query GetAllCompanyIds($where: CompanyWhere) {\n    companies(where: $where) {\n      name\n      instanceId\n    }\n  }\n": types.GetAllCompanyIdsDocument,
    "\nquery GetOrgsForCompany($where: OrganizationWhere){\n  organizations(where: $where){\n    name\n    instanceId\n    company{\n      instanceId\n    }\n  }\n}\n": types.GetOrgsForCompanyDocument,
    "\nquery GetAllCompanyWithOptions($where: CompanyWhere, $options: CompanyOptions){\n  companies(where: $where, options: $options) {\n    name\n    instanceId\n    description\n    isMarkedDelete\n    type\n  }\n}\n": types.GetAllCompanyWithOptionsDocument,
    " \nquery GetCompanies($where: CompanyWhere, $options: CompanyOptions){\n  companies(where: $where, options: $options) {\n    name\n    type\n    description\n    instanceId\n    isMarkedDelete\n    organization {\n      company {\n        name\n        instanceId\n      }\n    }\n    organizationConnection {\n      totalCount\n    }\n  }\n}\n": types.GetCompaniesDocument,
    "\n  query GetOrganizationsShort($where: OrganizationWhere, $options: OrganizationOptions) {\n    organizations(where: $where, options: $options) {\n      name\n      instanceId\n      description\n      isMarkedDelete\n    }\n  }\n": types.GetOrganizationsShortDocument,
    "\nquery GetOrganizations($where: OrganizationWhere, $options: OrganizationOptions) {\n  organizations(where: $where, options: $options) {\n    name\n    instanceId\n    description\n    isMarkedDelete\n    company {\n      name\n      instanceId\n    }\n    departments {\n      name\n      instanceId\n    }\n  }\n}\n": types.GetOrganizationsDocument,
    "\nquery GetDepartmentsShort($where: DepartmentWhere, $options: DepartmentOptions) {\n  departments(where: $where, options: $options) {\n    name\n    instanceId\n    description\n    isMarkedDelete\n  }\n}\n": types.GetDepartmentsShortDocument,
    "\nquery GetDepartments($where: DepartmentWhere, $options: DepartmentOptions) {\n  departments(where: $where, options: $options) {\n    name\n    instanceId\n    description\n    isMarkedDelete\n  }\n  companies {\n    name\n    instanceId\n  }\n  organizations {\n    name\n    instanceId\n  }\n}\n": types.GetDepartmentsDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation createCompany($input: [CompanyCreateInput!]!) {\n    createCompanies(input: $input) {\n      companies {\n        name\n        instanceId\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation createCompany($input: [CompanyCreateInput!]!) {\n    createCompanies(input: $input) {\n      companies {\n        name\n        instanceId\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation createOrganization($input: [OrganizationCreateInput!]!) {\n    createOrganizations(input: $input) {\n      organizations {\n        name\n        description\n        company {\n          name\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation createOrganization($input: [OrganizationCreateInput!]!) {\n    createOrganizations(input: $input) {\n      organizations {\n        name\n        description\n        company {\n          name\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation createDepartment($input: [DepartmentCreateInput!]!) {\n    createDepartments(input: $input) {\n      departments {\n        name\n        instanceId\n        description\n        organization {\n          instanceId\n          name\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation createDepartment($input: [DepartmentCreateInput!]!) {\n    createDepartments(input: $input) {\n      departments {\n        name\n        instanceId\n        description\n        organization {\n          instanceId\n          name\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation createPerson($input: [PersonCreateInput!]!) {\n    createPeople(input: $input) {\n      people {\n        firstName\n        lastName\n        instanceId\n        department {\n          name\n          instanceId\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation createPerson($input: [PersonCreateInput!]!) {\n    createPeople(input: $input) {\n      people {\n        firstName\n        lastName\n        instanceId\n        department {\n          name\n          instanceId\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetIPs {\n    ips {\n      instanceId\n      address\n    }\n  }\n"): (typeof documents)["\n  query GetIPs {\n    ips {\n      instanceId\n      address\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetAllCompanyIds($where: CompanyWhere) {\n    companies(where: $where) {\n      name\n      instanceId\n    }\n  }\n"): (typeof documents)["\n  query GetAllCompanyIds($where: CompanyWhere) {\n    companies(where: $where) {\n      name\n      instanceId\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery GetOrgsForCompany($where: OrganizationWhere){\n  organizations(where: $where){\n    name\n    instanceId\n    company{\n      instanceId\n    }\n  }\n}\n"): (typeof documents)["\nquery GetOrgsForCompany($where: OrganizationWhere){\n  organizations(where: $where){\n    name\n    instanceId\n    company{\n      instanceId\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery GetAllCompanyWithOptions($where: CompanyWhere, $options: CompanyOptions){\n  companies(where: $where, options: $options) {\n    name\n    instanceId\n    description\n    isMarkedDelete\n    type\n  }\n}\n"): (typeof documents)["\nquery GetAllCompanyWithOptions($where: CompanyWhere, $options: CompanyOptions){\n  companies(where: $where, options: $options) {\n    name\n    instanceId\n    description\n    isMarkedDelete\n    type\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: " \nquery GetCompanies($where: CompanyWhere, $options: CompanyOptions){\n  companies(where: $where, options: $options) {\n    name\n    type\n    description\n    instanceId\n    isMarkedDelete\n    organization {\n      company {\n        name\n        instanceId\n      }\n    }\n    organizationConnection {\n      totalCount\n    }\n  }\n}\n"): (typeof documents)[" \nquery GetCompanies($where: CompanyWhere, $options: CompanyOptions){\n  companies(where: $where, options: $options) {\n    name\n    type\n    description\n    instanceId\n    isMarkedDelete\n    organization {\n      company {\n        name\n        instanceId\n      }\n    }\n    organizationConnection {\n      totalCount\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetOrganizationsShort($where: OrganizationWhere, $options: OrganizationOptions) {\n    organizations(where: $where, options: $options) {\n      name\n      instanceId\n      description\n      isMarkedDelete\n    }\n  }\n"): (typeof documents)["\n  query GetOrganizationsShort($where: OrganizationWhere, $options: OrganizationOptions) {\n    organizations(where: $where, options: $options) {\n      name\n      instanceId\n      description\n      isMarkedDelete\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery GetOrganizations($where: OrganizationWhere, $options: OrganizationOptions) {\n  organizations(where: $where, options: $options) {\n    name\n    instanceId\n    description\n    isMarkedDelete\n    company {\n      name\n      instanceId\n    }\n    departments {\n      name\n      instanceId\n    }\n  }\n}\n"): (typeof documents)["\nquery GetOrganizations($where: OrganizationWhere, $options: OrganizationOptions) {\n  organizations(where: $where, options: $options) {\n    name\n    instanceId\n    description\n    isMarkedDelete\n    company {\n      name\n      instanceId\n    }\n    departments {\n      name\n      instanceId\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery GetDepartmentsShort($where: DepartmentWhere, $options: DepartmentOptions) {\n  departments(where: $where, options: $options) {\n    name\n    instanceId\n    description\n    isMarkedDelete\n  }\n}\n"): (typeof documents)["\nquery GetDepartmentsShort($where: DepartmentWhere, $options: DepartmentOptions) {\n  departments(where: $where, options: $options) {\n    name\n    instanceId\n    description\n    isMarkedDelete\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery GetDepartments($where: DepartmentWhere, $options: DepartmentOptions) {\n  departments(where: $where, options: $options) {\n    name\n    instanceId\n    description\n    isMarkedDelete\n  }\n  companies {\n    name\n    instanceId\n  }\n  organizations {\n    name\n    instanceId\n  }\n}\n"): (typeof documents)["\nquery GetDepartments($where: DepartmentWhere, $options: DepartmentOptions) {\n  departments(where: $where, options: $options) {\n    name\n    instanceId\n    description\n    isMarkedDelete\n  }\n  companies {\n    name\n    instanceId\n  }\n  organizations {\n    name\n    instanceId\n  }\n}\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;
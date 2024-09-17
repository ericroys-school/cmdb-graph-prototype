import { gql } from '@apollo/client';

export const CREATE_COMPANY = gql`
  mutation createCompany($input: [CompanyCreateInput!]!) {
    createCompanies(input: $input) {
      companies {
        name
        instanceId
      }
    }
  }
`;
export const CREATE_ORG = gql`
  mutation createOrganization($input: [OrganizationCreateInput!]!) {
    createOrganizations(input: $input) {
      organizations {
        name
        description
        company {
          name
        }
      }
    }
  }
`;

export const CREATE_DEPT = gql`
  mutation createDepartment($input: [DepartmentCreateInput!]!) {
    createDepartments(input: $input) {
      departments {
        name
        instanceId
        description
        organization {
          instanceId
          name
        }
      }
    }
  }
`;

export const CREATE_PERSON = gql`
  mutation createPerson($input: [PersonCreateInput!]!) {
    createPeople(input: $input) {
      people {
        firstName
        lastName
        instanceId
        department {
          name
          instanceId
        }
      }
    }
  }
`;

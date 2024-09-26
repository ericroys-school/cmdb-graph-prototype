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

export const UPDATE_COMPANY = gql(`
mutation updateCompanies($update: CompanyUpdateInput, $where: CompanyWhere) {
  updateCompanies(update: $update, where: $where) {
    companies {
      instanceId
      name
    }
  }
}
`);

export const DELETE_COMPANY = gql(`
mutation DeleteCompanies($where: CompanyWhere) {
  deleteCompanies(where: $where) {
    nodesDeleted
    relationshipsDeleted
  }
}
`);

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

export const UPDATE_ORG = gql(`
mutation updateOrganizations($where: OrganizationWhere, $update: OrganizationUpdateInput) {
  updateOrganizations(where: $where, update: $update) {
    organizations {
      name
      instanceId
    }
  }
}
`);

export const DELETE_ORG = gql(`
mutation DeleteOrganizations($where: OrganizationWhere) {
  deleteOrganizations(where: $where) {
    nodesDeleted
    relationshipsDeleted
  }
}
`);

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

export const UPDATE_DEPT = gql(`
mutation updateDepartments($where: DepartmentWhere, $update: DepartmentUpdateInput) {
  updateDepartments(where: $where, update: $update) {
    departments {
      name
      instanceId
    }
  }
}
`);

export const DELETE_DEPT = gql(`
mutation deleteDepartments($delete: DepartmentDeleteInput, $where: DepartmentWhere) {
  deleteDepartments(delete: $delete, where: $where) {
    nodesDeleted
    relationshipsDeleted
  }
}
`);

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

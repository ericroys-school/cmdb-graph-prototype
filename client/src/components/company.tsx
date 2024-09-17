import { useQuery } from '@apollo/client';
import { CompanyItem } from './companyItem';
// import { COMPANIES_ABV } from '../types/queries';
// import { gql } from '../graphTypes';
// import { GetIPsQuery } from '../graphTypes/graphql';
import { GET_ALL_COMPANY_IDS } from '../types/queries';
import { GetAllCompanyIdsQuery } from '../graphTypes/graphql';

export const Company = () => {
  const { loading, data, error } =
    useQuery<GetAllCompanyIdsQuery>(GET_ALL_COMPANY_IDS);
  return (
    <div>
      <h1>Companies</h1>
      <p>{loading ? 'loading.... ' : JSON.stringify(data)}</p>
      <select>
        {loading ? (
          <option>loading ...</option>
        ) : error ? (
          <option>there was an error</option>
        ) : data ? (
          data.companies.map((d) => (
            <option key={d.instanceId} value={d.instanceId}>
              {d.name}
            </option>
          ))
        ) : (
          <option></option>
        )}
      </select>

      <CompanyItem />
    </div>
  );
};

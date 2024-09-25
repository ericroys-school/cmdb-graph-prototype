import { useQuery } from '@apollo/client';
import { GET_ALL_COMPANY_WITH_OPTIONS } from '../../types/queries';
import { GetAllCompanyWithOptionsQuery } from '../../graphTypes/graphql';
import { CompanyListItem } from './companyListItem';

export type Props = {
  search?: string | undefined | null;
};
export const CompanyList = ({ search }: Props) => {
  let name_CONTAINS = search;
  const { loading, data, error } = useQuery<GetAllCompanyWithOptionsQuery>(
    GET_ALL_COMPANY_WITH_OPTIONS,
    {
      variables: {
        where: {
          isMarkedDelete: false,
          ...(name_CONTAINS && { name_CONTAINS }),
        },
        options: { sort: [{ name: 'ASC' }] },
      },
      fetchPolicy: 'cache-and-network',
    }
  );
  const loadMsg = <div>... loading ... </div>;
  const errMsg = <div>{JSON.stringify(error)}</div>;
  const hasResults = data && data.companies && data.companies.length > 0;
  const content = (
    <div className='w-full items-center justify-items-center content-center'>
      <div className='flex items-center w-full justify-center'>
        {hasResults ? (
          <div className='text-center'>
            <h1 className='text-3xl font-bold drop-shadow-custom-m-gray'>
              Companies
            </h1>
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className='flex flex-col w-full items-center justify-items-center'>
        {hasResults ? (
          <>
            {data?.companies.map((c) => (
              <CompanyListItem key={c.instanceId} data={c} />
            ))}
          </>
        ) : (
          <span className='text-center'>No matches found</span>
        )}
      </div>
    </div>
  );

  return error ? errMsg : loading ? loadMsg : content;
};

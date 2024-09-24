import { useQuery } from '@apollo/client';
import { GET_ALL_COMPANY_WITH_OPTIONS } from '../../types/queries';
import { GetAllCompanyWithOptionsQuery } from '../../graphTypes/graphql';
import { CompanyListItem } from './companyListItem';

export type Props = {
  search?: string | undefined | null;
};
export const CompanyList = ({ search }: Props) => {
  if (search === undefined) return <></>;
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
    }
  );
  const loadMsg = <div>... loading ... </div>;
  const errMsg = <div>{JSON.stringify(error)}</div>;
  const content = (
    <div className='flex items-center w-full justify-center'>
      <div className='w-1/2 flex flex-row flex-wrap justify-around'>
        {data?.companies.map((c) => (
          <CompanyListItem key={c.instanceId} data={c} />
        ))}
      </div>
    </div>
  );

  return error ? errMsg : loading ? loadMsg : content;
};

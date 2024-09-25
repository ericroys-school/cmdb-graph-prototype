import { useQuery } from '@apollo/client';

import { OrganizationListItem } from './organizationListItem';
import { GET_ORGANIZATIONS_SHORT } from '../../types/queries';
import { GetOrganizationsShortQuery } from '../../graphTypes/graphql';
import { useParams } from 'react-router-dom';

export type Props = {
  companyId?: string | undefined | null;
};

export const OrganizationList = ({ companyId }: Props) => {
  const { id } = useParams();

  if (!companyId && !id) return <></>;
  let instanceId = companyId ? companyId : id;

  const { loading, data, error } = useQuery<GetOrganizationsShortQuery>(
    GET_ORGANIZATIONS_SHORT,
    {
      variables: {
        where: {
          isMarkedDelete: false,
          company: {
            instanceId: instanceId,
          },
        },
      },
    }
  );
  const loadMsg = <div>... loading ... </div>;
  const errMsg = <div>{JSON.stringify(error)}</div>;
  const hasResults =
    data && data.organizations && data.organizations.length > 0;
  const content = (
    <div className='w-full items-center justify-items-center content-center'>
      <div className='flex items-center w-full justify-center'>
        {hasResults ? (
          <div className='text-center'>
            <h1 className='text-3xl font-bold drop-shadow-custom-m-gray'>
              Organizations
            </h1>
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className='flex flex-col w-full items-center justify-items-center'>
        {hasResults ? (
          <>
            {data?.organizations.map((c) => (
              <OrganizationListItem key={c.instanceId} data={c} />
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

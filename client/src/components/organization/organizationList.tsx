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
  const content = (
    <div className='flex items-center w-full justify-center'>
      <div className='w-1/2 flex flex-row flex-wrap justify-around'>
        {data?.organizations.map((c) => (
          <OrganizationListItem key={c.instanceId} data={c} />
        ))}
      </div>
    </div>
  );

  return error ? errMsg : loading ? loadMsg : content;
};

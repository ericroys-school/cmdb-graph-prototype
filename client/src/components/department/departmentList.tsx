import { useParams } from 'react-router-dom';
import { GetDepartmentsShortQuery } from '../../graphTypes/graphql';
import { GET_DEPARTMENTS_SHORT } from '../../types/queries';
import { ErrorPage } from '../error/error';
import { useQuery } from '@apollo/client';
import { DepartmentListItem } from './departmentListItem';

export type Props = {
  organizationId?: string | undefined | null;
};

export const DepartmentList = ({ organizationId }: Props) => {
  const { id } = useParams();
  if (!organizationId && !id) return <></>;
  let instanceId = organizationId ? organizationId : id;

  const { loading, data, error } = useQuery<GetDepartmentsShortQuery>(
    GET_DEPARTMENTS_SHORT,
    {
      variables: {
        where: {
          isMarkedDelete: false,
          organization: {
            instanceId: instanceId,
          },
        },
      },
    }
  );

  if (!loading && (!data || !data.departments || data.departments.length < 1))
    return <ErrorPage error={'Department not found'} />;

  return error ? (
    <ErrorPage error={JSON.stringify(error)} />
  ) : loading ? (
    <div>... loading ... </div>
  ) : (
    <div className='flex items-center w-full justify-center'>
      <div className='w-1/2 flex flex-row flex-wrap justify-around'>
        {data?.departments.map((c) => (
          <DepartmentListItem key={c.instanceId} data={c} />
        ))}
      </div>
    </div>
  );
};

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
        options: { sort: [{ name: 'ASC' }] },
      },
      fetchPolicy: 'cache-and-network',
    }
  );

  // if (!loading && (!data || !data.departments || data.departments.length < 1))
  //   return <ErrorPage error={'Department not found'} />;
  const hasResults = data && data.departments && data.departments.length > 0;
  return error ? (
    <ErrorPage error={JSON.stringify(error)} />
  ) : loading ? (
    <div>... loading ... </div>
  ) : (
    <div className='w-full items-center justify-items-center content-center'>
      <div className='flex items-center w-full justify-center'>
        {hasResults ? (
          <div className='text-center'>
            <h1 className='text-3xl font-bold drop-shadow-custom-m-gray'>
              Departments
            </h1>
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className='flex flex-col w-full items-center justify-items-center'>
        {hasResults ? (
          <>
            {data?.departments.map((c) => (
              <DepartmentListItem key={c.instanceId} data={c} />
            ))}
          </>
        ) : (
          <span className='text-center'>No matches found</span>
        )}
      </div>
    </div>
  );
};

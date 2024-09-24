import { useParams } from 'react-router-dom';
import { ErrorPage } from '../error/error';
import { GET_DEPARTMENTS } from '../../types/queries';
import { GetDepartmentsQuery } from '../../graphTypes/graphql';
import { useQuery } from '@apollo/client';
import { NoRecords } from '../norecords';

export const Department = () => {
  const { id } = useParams();

  if (!id) return <ErrorPage error='No id provided for the department' />;
  const { loading, data, error } = useQuery<GetDepartmentsQuery>(
    GET_DEPARTMENTS,
    {
      variables: {
        where: {
          instanceId: id,
          isMarkedDelete: false,
        },
      },
    }
  );

  if (!loading && (!data || !data.departments || data.departments.length < 1))
    return <NoRecords />;
  const d = data?.departments[0];

  return error ? (
    <ErrorPage error={JSON.stringify(error)} />
  ) : loading ? (
    <div>... loading ... </div>
  ) : !d ? (
    <NoRecords />
  ) : (
    <section className='flex flex-col items-center w-full justify-center'>
      <article className='text-center mt-6 flex flex-col align-middle items-center w-1/2'>
        <h1 className='text-3xl font-bold drop-shadow-custom-m-gray'>
          Department
        </h1>
        <div className='mt-3 rounded-md drop-shadow-custom-m-gray text-center w-1/2 border-2 border-blue mr-1'>
          <h1 className='font-extrabold'>{d.name}</h1>
          <p>{d.description}</p>
        </div>
      </article>
    </section>
  );
};

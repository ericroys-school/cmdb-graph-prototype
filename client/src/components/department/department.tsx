import { useNavigate, useParams } from 'react-router-dom';
import { ErrorPage } from '../error/error';
import { GET_DEPARTMENTS } from '../../types/queries';
import { GetDepartmentsQuery } from '../../graphTypes/graphql';
import { useMutation, useQuery } from '@apollo/client';
import { NoRecords } from '../norecords';
import { StyledIconText } from '../../types/styledIconTxt';
import { defaultStyleIconText } from '../styling/styles';
import { DELETE_DEPT } from '../../types/mutations';
import { RiEdit2Line } from 'react-icons/ri';
import { ButtonBar } from '../../lib/buttonBar';
import { BsTrash3 } from 'react-icons/bs';

export const Department = () => {
  const { id } = useParams();
  const navigate = useNavigate();

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
      fetchPolicy: 'cache-and-network',
    }
  );

  const [deleteDepartment] = useMutation(DELETE_DEPT, {
    variables: {
      where: {
        instanceId: id,
      },
    },
  });

  const handleDelete = async () => {
    try {
      const { errors, data } = await deleteDepartment();
      if (errors) {
        console.log(JSON.stringify(errors));
      } else {
        !data ? console.log(' no data after delete') : navigate(-1);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const buttons: StyledIconText[] = [
    {
      icon: BsTrash3,
      text: 'Delete',
      onClick: () => handleDelete(),
      ...defaultStyleIconText,
    },
    {
      icon: RiEdit2Line,
      text: 'Edit',
      onClick: () => {
        navigate(`/deptedit/${id}`);
      },
      ...defaultStyleIconText,
    },
  ];

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
          {d.organization && d.organization.length > 0 ? (
            <p>Reports to: {d.organization[0].name}</p>
          ) : (
            <></>
          )}
        </div>
      </article>
      <ButtonBar buttons={buttons} />
    </section>
  );
};

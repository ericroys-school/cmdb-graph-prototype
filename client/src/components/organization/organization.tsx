import { useNavigate, useParams } from 'react-router-dom';
import { ErrorPage } from '../error/error';
import { GetOrganizationsQuery } from '../../graphTypes/graphql';
import { useMutation, useQuery } from '@apollo/client';
import { GET_ORGANIZATIONS } from '../../types/queries';
import { NoRecords } from '../norecords';
import { useState } from 'react';
import { StyledIconText } from '../../types/styledIconTxt';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { defaultStyleIconText } from '../styling/styles';
import { SlOrganization } from 'react-icons/sl';
import { ButtonBar } from '../../lib/buttonBar';
import { DepartmentList } from '../department/departmentList';
import { BsTrash3 } from 'react-icons/bs';
import { DELETE_ORG } from '../../types/mutations';

export const Organization = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  if (!id) return <ErrorPage error='No id provided for the organization' />;
  const [isDeps, setIsDeps] = useState<boolean>(false);

  const { loading, data, error } = useQuery<GetOrganizationsQuery>(
    GET_ORGANIZATIONS,
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

  const [deleteOrganization] = useMutation(DELETE_ORG, {
    variables: {
      where: {
        instanceId: id,
      },
    },
  });

  const handleDelete = async () => {
    try {
      const { errors, data } = await deleteOrganization();
      if (errors) {
        console.log(JSON.stringify(errors));
      } else {
        !data ? console.log(' no data after delete') : navigate(-1);
      }
    } catch (err) {
      console.log(err);
    }
  };

  if (
    !loading &&
    (!data || !data.organizations || data.organizations.length < 1)
  )
    return <ErrorPage error={'Organization not found'} />;
  const d = data?.organizations[0];

  const buttons: StyledIconText[] = [
    {
      icon: IoMdAddCircleOutline,
      text: 'Add Department',
      onClick: () => {
        // console.log('>>>>>>' + id);
        navigate(`/deptcreate/${id}`);
      },
      ...defaultStyleIconText,
    },
    {
      icon: SlOrganization,
      text: 'Show Departments',
      onClick: () => setIsDeps(!isDeps),
      ...defaultStyleIconText,
    },
    {
      icon: BsTrash3,
      text: 'Delete',
      onClick: () => handleDelete(),
      ...defaultStyleIconText,
    },
  ];

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
          Organization
        </h1>
        <div className='mt-3 rounded-md drop-shadow-custom-m-gray text-center w-1/2 border-2 border-blue mr-1'>
          <h1 className='font-extrabold'>{d.name}</h1>
          <p>{d.description}</p>
          <p>
            {d && d.company && d.company.length > 0
              ? `Organizes: ${d.company[0].name}`
              : ''}
          </p>
          <p>{`departments: ${d.departments.length}`}</p>
        </div>
      </article>
      <ButtonBar buttons={buttons} />
      {isDeps ? (
        <article className='text-center mt-6 flex flex-col align-middle items-center w-1/2'>
          <DepartmentList organizationId={id} />{' '}
        </article>
      ) : (
        <></>
      )}
    </section>
  );
};

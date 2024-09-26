import { useParams } from 'react-router-dom';
import { ErrorPage } from '../error/error';
import { useMutation, useQuery } from '@apollo/client';
import { GET_COMPANIES } from '../../types/queries';
import { GetCompaniesQuery } from '../../graphTypes/graphql';
import { ButtonBar } from '../../lib/buttonBar';
import { SlOrganization } from 'react-icons/sl';
import { defaultStyleIconText } from '../styling/styles';
import { useState } from 'react';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { StyledIconText } from '../../types/styledIconTxt';
import { OrganizationList } from '../organization/organizationList';
import { NoRecords } from '../norecords';
import { BsTrash3 } from 'react-icons/bs';
import { DELETE_COMPANY } from '../../types/mutations';
import { RiEdit2Line } from 'react-icons/ri';

export const Company = () => {
  const { id } = useParams();
  const [isOrgs, setIsOrgs] = useState<boolean>(false);
  const navigate = useNavigate();

  if (!id) return <ErrorPage error='No id provided for the company' />;

  const { loading, data, error } = useQuery<GetCompaniesQuery>(GET_COMPANIES, {
    variables: {
      where: {
        instanceId: id,
        isMarkedDelete: false,
      },
    },
    fetchPolicy: 'cache-and-network',
  });

  const [deleteCompany] = useMutation(DELETE_COMPANY, {
    variables: {
      where: {
        instanceId: id,
      },
    },
  });

  const handleDelete = async () => {
    try {
      const { errors, data } = await deleteCompany();
      if (errors) {
        console.log(JSON.stringify(errors));
      } else {
        !data ? console.log(' no data after delete') : navigate(-1);
      }
    } catch (err) {
      console.log(err);
    }
  };

  if (!loading && (!data || !data.companies || data.companies.length < 1))
    return <ErrorPage error={'Company not found'} />;
  const d = data?.companies[0];
  // console.log(JSON.stringify(d));
  const buttons: StyledIconText[] = [
    {
      icon: IoMdAddCircleOutline,
      text: 'Add Organization',
      onClick: () => {
        navigate(`/orgcreate/${id}`);
      },
      ...defaultStyleIconText,
    },
    {
      icon: SlOrganization,
      text: 'Show Organizations',
      onClick: () => setIsOrgs(!isOrgs),
      ...defaultStyleIconText,
    },
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
        navigate(`/comedit/${id}`);
      },
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
          Company
        </h1>
        <div className='mt-3 rounded-md drop-shadow-custom-m-gray text-center w-1/2 border-2 border-blue mr-1'>
          <h1 className='font-extrabold'>{d.name}</h1>
          <p>{d.description}</p>
          <p>{d.type}</p>
          <p className='italic'>{`Organizations: ${d.organization.length}`}</p>
        </div>
      </article>
      <ButtonBar buttons={buttons} />
      {isOrgs ? (
        <article className='text-center mt-6 flex flex-col align-middle items-center w-1/2'>
          <OrganizationList companyId={id} />{' '}
        </article>
      ) : (
        <></>
      )}
    </section>
  );
};

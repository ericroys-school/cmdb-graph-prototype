import { useMutation, useQuery } from '@apollo/client';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { UPDATE_ORG } from '../../types/mutations';
import { UpdateOrganization } from '../../types/types';
import { updateOrg } from '../../validators/validators';
import { zodResolver } from '@hookform/resolvers/zod';
import { btnclass, errclass, inputclass, lblClass } from '../styling/styles';

import IconWithText from '../../lib/styledIconText';
import { SiMinutemailer } from 'react-icons/si';
import { useAppDispatch } from '../../store/storeHooks';
import { fetchOrgMenu } from '../../reducers/organization/organization';
import { ErrorPage } from '../error/error';
import { GET_ORGANIZATIONS } from '../../types/queries';
import { GetOrganizationsQuery } from '../../graphTypes/graphql';
import { NoRecords } from '../norecords';

export const EditOrganization = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useAppDispatch();
  if (!id) return <ErrorPage error='No id provided for the organization' />;

  const { loading, data, error } = useQuery<GetOrganizationsQuery>(
    GET_ORGANIZATIONS,
    {
      variables: {
        where: {
          instanceId: id,
          isMarkedDelete: false,
        },
      },
      fetchPolicy: 'cache-first',
    }
  );

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<UpdateOrganization>({ resolver: zodResolver(updateOrg) });

  const [changeOrg] = useMutation(UPDATE_ORG, {
    variables: {
      update: {
        name: getValues('name'),
        description: getValues('description'),
      },
      where: {
        instanceId: id,
      },
    },
  });

  const onSubmit = async () => {
    try {
      const { errors } = await changeOrg();
      if (!errors) {
        dispatch(fetchOrgMenu());
        navigate(id ? `/organization/${id}` : '-1');
      } else errors.forEach((e) => console.log(e.message));
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

  return error ? (
    <ErrorPage error={JSON.stringify(error)} />
  ) : loading ? (
    <div>... loading ... </div>
  ) : !d ? (
    <NoRecords />
  ) : (
    <div className='flex justify-center w-1/2'>
      <section
        id='updateOrg'
        className=' flex flex-wrap flex-col mt-10 w-full content-center items-center '>
        <div
          id='form-head'
          className='flex flex-col w-3/4 bg-blue rounded-t-2xl p-4'>
          <h1 className='text-4xl font-bold text-center drop-shadow-custom-m-gray'>
            Edit Organization
          </h1>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='bg-black b-t-0 rounded-b-2xl p-4 w-3/4'>
          <label htmlFor='organization' className={lblClass}>
            Organization
          </label>
          <input
            id='organization'
            defaultValue={d.name}
            {...register('name')}
            placeholder='Your Organization Name here'
            className={inputclass}
          />
          {errors.name && (
            <p className={errclass}>{`${errors.name.message}`}</p>
          )}
          <label htmlFor='description' className={lblClass}>
            Description
          </label>
          <input
            id='description'
            defaultValue={d.description || ''}
            {...register('description')}
            placeholder='A Description'
            className={inputclass}
          />
          {errors.description && (
            <p className={errclass}>{`${errors.description?.message}`}</p>
          )}

          <div className='flex justify-center'>
            <button disabled={isSubmitting} className={btnclass} type='submit'>
              <IconWithText
                icon={SiMinutemailer}
                iconClass={
                  'fill-redish mb-1 ml-1 mr-2 translate-y-1 drop-shadow-custom-sm-blue'
                }
                text={'Save'}
                txtClass={
                  'font-extrabold text-black mr-2 drop-shadow-custom-m-gray hover:text-white'
                }
              />
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

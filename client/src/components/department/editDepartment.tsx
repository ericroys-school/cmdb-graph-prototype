import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { UpdateDepartment } from '../../types/types';
import { updateDept } from '../../validators/validators';
import { UPDATE_DEPT } from '../../types/mutations';
import { useMutation, useQuery } from '@apollo/client';
import { btnclass, errclass, inputclass, lblClass } from '../styling/styles';
import IconWithText from '../../lib/styledIconText';
import { SiMinutemailer } from 'react-icons/si';

import { ErrorPage } from '../error/error';
import { GET_DEPARTMENTS } from '../../types/queries';
import { GetDepartmentsQuery } from '../../graphTypes/graphql';
import { NoRecords } from '../norecords';

export const EditDepartment = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  if (!id) return <ErrorPage error='No id provided for the organization' />;

  const { loading, data, error } = useQuery<GetDepartmentsQuery>(
    GET_DEPARTMENTS,
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
  } = useForm<UpdateDepartment>({ resolver: zodResolver(updateDept) });

  const [changeDepartment] = useMutation(UPDATE_DEPT, {
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
      const { errors } = await changeDepartment();
      if (!errors) {
        navigate(id ? `/department/${id}` : '-1');
      } else errors.forEach((e) => console.log(e.message));
    } catch (err) {
      console.log(err);
    }
  };

  if (!loading && (!data || !data.departments || data.departments.length < 1))
    return <ErrorPage error={'Department not found'} />;
  const d = data?.departments[0];

  return error ? (
    <ErrorPage error={JSON.stringify(error)} />
  ) : loading ? (
    <div>... loading ... </div>
  ) : !d ? (
    <NoRecords />
  ) : (
    <div className='flex justify-center w-1/2'>
      <section
        id='updateDept'
        className=' flex flex-wrap flex-col mt-10 w-full content-center items-center '>
        <div
          id='form-head'
          className='flex flex-col w-3/4 bg-blue rounded-t-2xl p-4'>
          <h1 className='text-4xl font-bold text-center drop-shadow-custom-m-gray'>
            Edit Department
          </h1>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='bg-black b-t-0 rounded-b-2xl p-4 w-3/4'>
          <label htmlFor='department' className={lblClass}>
            Name
          </label>
          <input
            id='department'
            {...register('name')}
            defaultValue={d.name}
            placeholder='Your Department Name here'
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

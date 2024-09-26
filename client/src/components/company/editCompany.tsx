import { useMutation, useQuery } from '@apollo/client';
import { UPDATE_COMPANY } from '../../types/mutations';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { newCompany } from '../../validators/validators';
import { NewCompany } from '../../types/types';
import IconWithText from '../../lib/styledIconText';
import { SiMinutemailer } from 'react-icons/si';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchCompanyMenu } from '../../reducers/company/company';
import { useAppDispatch } from '../../store/storeHooks';
import { btnclass, errclass, inputclass, lblClass } from '../styling/styles';
import { GET_COMPANIES } from '../../types/queries';
import { GetCompaniesQuery } from '../../graphTypes/graphql';
import { ErrorPage } from '../error/error';
import { NoRecords } from '../norecords';

export const EditCompany = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  if (!id) return <ErrorPage error='No id provided for the company' />;

  const { loading, data, error } = useQuery<GetCompaniesQuery>(GET_COMPANIES, {
    variables: {
      where: {
        instanceId: id,
        isMarkedDelete: false,
      },
    },
    fetchPolicy: 'cache-first',
  });

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<NewCompany>({ resolver: zodResolver(newCompany) });
  const [updateCompany] = useMutation(UPDATE_COMPANY, {
    variables: {
      update: {
        name: getValues('name'),
        description: getValues('description'),
        type: getValues('type'),
      },
      where: {
        instanceId: id,
      },
    },
  });

  const onSubmit: SubmitHandler<NewCompany> = async () => {
    try {
      const { errors } = await updateCompany();

      if (!errors) {
        //update store with new company info
        dispatch(fetchCompanyMenu());
        //redirect to display
        navigate(`/company/${id}`);
      } else errors.forEach((e) => console.log(e.message));
    } catch (error) {
      console.log(error);
    }
  };

  if (!loading && (!data || !data.companies || data.companies.length < 1))
    return <ErrorPage error={'Company not found'} />;
  const d = data?.companies[0];

  return error ? (
    <ErrorPage error={JSON.stringify(error)} />
  ) : loading ? (
    <div>... loading ... </div>
  ) : !d ? (
    <NoRecords />
  ) : (
    <div className='flex justify-center w-1/2'>
      <section
        id='editCompany'
        className=' flex flex-wrap flex-col mt-10 w-full content-center items-center '>
        <div
          id='form-head'
          className='flex flex-col w-3/4 bg-blue rounded-t-2xl p-4'>
          <h1 className='text-4xl font-bold text-center drop-shadow-custom-m-gray'>
            Edit Company
          </h1>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='bg-black b-t-0 rounded-b-2xl p-4 w-3/4'>
          <label htmlFor='company' className={lblClass}>
            Company
          </label>
          <input
            id='company'
            {...register('name')}
            defaultValue={d.name}
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
            {...register('description')}
            defaultValue={d.description || ''}
            placeholder='A Description'
            className={inputclass}
          />
          {errors.name && (
            <p className={errclass}>{`${errors.description?.message}`}</p>
          )}
          <label htmlFor='type' className={lblClass}>
            Company Type
          </label>
          <input
            id='type'
            {...register('type')}
            defaultValue={d.type || ''}
            placeholder='What type of company'
            className={inputclass}
          />
          {errors.name && (
            <p className={errclass}>{`${errors.type?.message}`}</p>
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

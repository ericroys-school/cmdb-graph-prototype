import { useMutation } from '@apollo/client';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { CREATE_ORG } from '../../types/mutations';
import { NewOrganization } from '../../types/types';
import { newOrg } from '../../validators/validators';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  btnclass,
  errclass,
  inputclass,
  inputclassHidden,
  lblClass,
} from '../styling/styles';
import { CompanyMenu } from '../company/companyMenu';
import IconWithText from '../../lib/styledIconText';
import { SiMinutemailer } from 'react-icons/si';
import { useAppDispatch } from '../../store/storeHooks';
import { fetchOrgMenu } from '../../reducers/organization/organization';

export const CreateOrganization = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<NewOrganization>({ resolver: zodResolver(newOrg) });
  const [createOrganization] = useMutation(CREATE_ORG, {
    variables: {
      input: {
        name: getValues('name'),
        description: getValues('description'),
        company: {
          connect: {
            where: {
              node: {
                instanceId: getValues('companyId'),
              },
            },
          },
        },
      },
    },
  });

  const onSubmit = async () => {
    try {
      const { errors } = await createOrganization();
      if (!errors) {
        dispatch(fetchOrgMenu());
        navigate(id ? `/company/${id}` : '-1');
      } else errors.forEach((e) => console.log(e.message));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='flex justify-center w-1/2'>
      <section
        id='createCompany'
        className=' flex flex-wrap flex-col mt-10 w-full content-center items-center '>
        <div
          id='form-head'
          className='flex flex-col w-3/4 bg-blue rounded-t-2xl p-4'>
          <h1 className='text-4xl font-bold text-center drop-shadow-custom-m-gray'>
            Create Organization
          </h1>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='bg-black b-t-0 rounded-b-2xl p-4 w-3/4'>
          {id ? (
            <input
              className={inputclassHidden}
              value={id}
              id='companyId'
              {...register('companyId')}></input>
          ) : (
            <>
              <label htmlFor='company' className={lblClass}>
                Company
              </label>
              <CompanyMenu className={inputclass} register={register} />
            </>
          )}

          {errors.name && (
            <p className={errclass}>{`${errors.companyId?.message}`}</p>
          )}
          <label htmlFor='organization' className={lblClass}>
            Organization
          </label>
          <input
            id='organization'
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

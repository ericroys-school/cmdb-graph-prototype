import { useMutation } from '@apollo/client';
import { CREATE_COMPANY } from '../../types/mutations';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { newCompany } from '../../validators/validators';
import { NewCompany } from '../../types/types';
import IconWithText from '../../lib/styledIconText';
import { SiMinutemailer } from 'react-icons/si';
import { useNavigate } from 'react-router-dom';
import { fetchCompanyMenu } from '../../reducers/company/company';
import { useAppDispatch } from '../../store/storeHooks';
import { btnclass, errclass, inputclass, lblClass } from '../styling/styles';

export const CreateCompany = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<NewCompany>({ resolver: zodResolver(newCompany) });

  const [createCompany] = useMutation(CREATE_COMPANY, {
    variables: {
      input: {
        name: getValues('name'),
        description: getValues('description'),
        type: getValues('type'),
      },
    },
  });

  const onSubmit = async () => {
    try {
      const { data, errors } = await createCompany();

      if (!errors) {
        //update store with new company info
        dispatch(fetchCompanyMenu());
        //get the instance id from created company to
        //redirect to display
        if (data) {
          const { createCompanies } = data;
          const cid =
            createCompanies &&
            createCompanies.companies &&
            createCompanies.companies.length > 0
              ? createCompanies.companies[0].instanceId
              : null;
          if (cid) navigate(`/company/${cid}`);
        }
      } else errors.forEach((e) => console.log(e.message));
    } catch (error) {
      console.log(error);
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
            Create Company
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
            placeholder='Your Company Name here'
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
          <label htmlFor='type' className={lblClass}>
            Company Type
          </label>
          <input
            id='type'
            {...register('type')}
            placeholder='What type of company'
            className={inputclass}
          />
          {errors.type && (
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

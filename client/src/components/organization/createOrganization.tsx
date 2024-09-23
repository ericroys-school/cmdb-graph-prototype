import { useMutation } from '@apollo/client';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { CREATE_ORG } from '../../types/mutations';
import { NewOrganization } from '../../types/types';
import { newOrg } from '../../validators/validators';
import { zodResolver } from '@hookform/resolvers/zod';
import { btnclass, errclass, inputclass, lblClass } from '../styling/styles';
import { CompanyMenu } from '../company/companyMenu';
import IconWithText from '../../lib/styledIconText';
import { SiMinutemailer } from 'react-icons/si';
import { useAppDispatch } from '../../store/storeHooks';
import { fetchOrgMenu } from '../../reducers/organization/organization';
// import { useState } from 'react';

export const CreateOrganization = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    // getValues,
    formState: { errors, isSubmitting },
  } = useForm<NewOrganization>({ resolver: zodResolver(newOrg) });
  const [createOrganization, { error }] = useMutation(CREATE_ORG);
  // const [co, setCo] = useState(getValues('companyId'));

  const onSubmit = async (org: NewOrganization) => {
    try {
      await createOrganization({
        variables: {
          input: {
            name: org.name,
            description: org.description,
            company: {
              connect: {
                where: {
                  node: {
                    instanceId: org.companyId,
                  },
                },
              },
            },
          },
        },
      });
      if (!error) {
        dispatch(fetchOrgMenu());
        navigate('/');
      } else console.log(error);
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
          <label htmlFor='company' className={lblClass}>
            Company
          </label>
          <CompanyMenu
            className={inputclass}
            register={register}
            // setValue={setCo}
          />
          {errors.name && (
            <p className={errclass}>{`${errors.companyId?.message}`}</p>
          )}
          {/* <OrganizationMenu
            className={inputclass}
            register={register}
            companyId={co}
          /> */}
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
          {errors.name && (
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

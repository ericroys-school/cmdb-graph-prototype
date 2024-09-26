import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { NewDepartment } from '../../types/types';
import { newDept } from '../../validators/validators';
import { CREATE_DEPT } from '../../types/mutations';
import { useMutation } from '@apollo/client';
import {
  btnclass,
  errclass,
  inputclass,
  inputclassHidden,
  lblClass,
} from '../styling/styles';
import IconWithText from '../../lib/styledIconText';
import { SiMinutemailer } from 'react-icons/si';
import { CompanyMenu } from '../company/companyMenu';
import { OrganizationMenu } from '../organization/organizationMenu';
import { useState } from 'react';
import { selectParentByOrgId } from '../../reducers/organization/organization';
import { useAppSelector } from '../../store/storeHooks';

export const CreateDepartment = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log('ID: ' + id);
  let coid = null;
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<NewDepartment>({ resolver: zodResolver(newDept) });
  const [createDepartment, { error }] = useMutation(CREATE_DEPT);
  //needed so state can be shared with org menu
  const [co, _setCo] = useState<string>('');
  if (id) {
    const ires = useAppSelector((state) => selectParentByOrgId(state, id));
    coid = ires && ires.parent ? ires.parent : null;
    console.log('COID: ' + coid);
  }

  const onSubmit = async (dept: NewDepartment) => {
    console.log('>>>>: ' + dept.organizationId);
    try {
      await createDepartment({
        variables: {
          input: {
            name: dept.name,
            description: dept.description,
            organization: {
              connect: {
                where: {
                  node: {
                    instanceId: dept.organizationId,
                  },
                },
              },
            },
          },
        },
      });
      !error ? navigate(id ? `/organization/${id}` : '-1') : console.log(error);
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
            Create Department
          </h1>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='bg-black b-t-0 rounded-b-2xl p-4 w-3/4'>
          {coid ? (
            <>
              <input
                className={inputclassHidden}
                defaultValue={coid}
                id='companyId'></input>
              <input
                className={inputclassHidden}
                defaultValue={id}
                {...register('organizationId')}
                id='organization'></input>
            </>
          ) : (
            <>
              <label htmlFor='company' className={lblClass}>
                Company
              </label>
              <CompanyMenu className={inputclass} register={register} />
              <label htmlFor='organization' className={lblClass}>
                Organization
              </label>
              <OrganizationMenu
                className={inputclass}
                register={register}
                companyId={coid ? coid : co}
              />
              {errors.name && (
                <p
                  className={errclass}>{`${errors.organizationId?.message}`}</p>
              )}
            </>
          )}

          <label htmlFor='department' className={lblClass}>
            Name
          </label>
          <input
            id='department'
            {...register('name')}
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

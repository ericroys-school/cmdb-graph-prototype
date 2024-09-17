import { useMutation } from '@apollo/client';
import { CREATE_COMPANY } from '../types/mutations';
import { useForm } from 'react-hook-form';
// import { CompanyCreateInput } from '../graphTypes/graphql';
import { zodResolver } from '@hookform/resolvers/zod';
import { newCompany } from '../validators/validators';
import { NewCompany } from '../types/types';
import IconWithText from '../lib/styledIconText';
import { SiMinutemailer } from 'react-icons/si';

export const CreateCompany = () => {
  const {
    register,
    handleSubmit,
    // reset,
    // formState,
    formState: { errors, isSubmitting },
  } = useForm<NewCompany>({ resolver: zodResolver(newCompany) });

  const [createCompany, { error }] = useMutation(CREATE_COMPANY);

  const onSubmit = async (com: NewCompany) => {
    try {
      const { data } = await createCompany({
        variables: {
          input: {
            name: com.name,
            description: com.description,
            type: com.type,
          },
        },
      });
      console.log('data: ', JSON.stringify(data));
      if (error) {
        console.log(error);
      }
    } catch (error) {
      console.log(error);
      //TODO:
    }
  };

  return (
    <section
      id='createCompany'
      className='flex flex-wrap flex-col mt-10 w-full content-center '>
      <h1 className='text-4xl font-bold text-center drop-shadow-abc mb-10'>
        Create Company
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='mt-4 content-around flex flex-col w-1/3'>
        <input
          {...register('name')}
          placeholder='Your Company Name here'
          className={inputclass}
        />
        {errors.name && <p className={errclass}>{`${errors.name.message}`}</p>}
        <input
          {...register('description')}
          placeholder='A Description'
          className={inputclass}
        />
        {errors.name && (
          <p className={errclass}>{`${errors.description?.message}`}</p>
        )}
        <input
          {...register('type')}
          placeholder='What type of company'
          className={inputclass}
        />
        {errors.name && <p className={errclass}>{`${errors.type?.message}`}</p>}
        <button disabled={isSubmitting} className={btnclass} type='submit'>
          <IconWithText
            icon={SiMinutemailer}
            iconClass={'fill-redish mb-1 ml-4 mr-2 translate-y-1'}
            text={'Submit'}
            txtClass={'font-extrabold text-bluish-dark'}
          />
        </button>
      </form>
    </section>
  );
};

const inputclass = `w-full rounded-md border border-greenish-light p-2 mb-2 text-sm 
placeholder:text-bluish-dark shadow-md shadow-pinkish focus:outline focus:outline-greenish-light focus:outline-2`;
const errclass = 'text-redish font-bold text-center';
const btnclass = `flex font-bold m-2 mt-3 p-1 rounded bg-bluish disabled:bg-opacity-95 
shadow-md shadow-pinkish justify-center hover:shadow-md hover:shadow-redish`;

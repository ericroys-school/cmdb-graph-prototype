import { inputclass } from '../../components/styling/styles';
import { CompanyList } from '../../components/company/companyList';
import { useState } from 'react';

export const CompanyPage = () => {
  const [s, setS] = useState<string>('<>');

  return (
    <section className='flex flex-col items-center w-full justify-center'>
      <article className='text-center mt-6 flex flex-col align-middle items-center w-1/2'>
        <h1 className='text-3xl font-bold drop-shadow-custom-m-gray'>
          Company
        </h1>
        <div
          id='search'
          className='mt-10 w-3/4 rounded-md flex justify-between'>
          <input
            className={inputclass + ' text-center'}
            onChange={(e) => setS(e.currentTarget.value)}
            placeholder='Enter search name here'></input>
        </div>
      </article>
      <article className='text-center mt-6 flex flex-col align-middle items-center w-1/2'>
        <CompanyList search={s} />
      </article>
    </section>
  );
};

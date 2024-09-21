import { CompanyItem } from '../../types/company/company';

export type Props = {
  data: CompanyItem;
};

export const CompanyListItem = ({ data }: Props) => {
  return (
    <div className='mt-3 rounded-md drop-shadow-custom-m-gray text-center w-1/4 border-2 border-blue'>
      <h1 className='font-extrabold'>{data.name}</h1>
      <p>{data.description}</p>
    </div>
  );
};

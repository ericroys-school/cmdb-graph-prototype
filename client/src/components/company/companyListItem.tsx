import { CompanyItem } from '../../types/company/company';
import { useNavigate } from 'react-router-dom';

export type Props = {
  data: CompanyItem;
};

export const CompanyListItem = ({ data }: Props) => {
  const navigate = useNavigate();
  return (
    <div
      className='mt-3 rounded-md drop-shadow-custom-m-gray text-center w-1/2 border-2 border-blue mr-1 cursor-pointer hover:shadow-md hover:shadow-black'
      onClick={() => navigate(`/company/${data.instanceId}`)}>
      <h1 className='font-extrabold'>{data.name}</h1>
      <p>{data.description}</p>
      <p>{data.type}</p>
    </div>
  );
};

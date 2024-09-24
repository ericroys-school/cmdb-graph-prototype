import { useNavigate } from 'react-router-dom';
import { DepartmentItemShort } from '../../types/department/department';

export type Props = {
  data: DepartmentItemShort;
};

export const DepartmentListItem = ({ data }: Props) => {
  const navigate = useNavigate();
  return (
    <div
      className='mt-3 rounded-md drop-shadow-custom-m-gray text-center w-1/2 border-2 border-blue mr-1'
      onClick={() => navigate(`/department/${data.instanceId}`)}>
      <h1 className='font-extrabold'>{data.name}</h1>
      <p>{data.description}</p>
    </div>
  );
};

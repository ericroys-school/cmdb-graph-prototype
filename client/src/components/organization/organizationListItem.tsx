import { useNavigate } from 'react-router-dom';
import { OrganizationItemShort } from '../../types/organization/organization';

export type Props = {
  data: OrganizationItemShort;
};

export const OrganizationListItem = ({ data }: Props) => {
  const navigate = useNavigate();
  return (
    <div
      className='mt-3 rounded-md drop-shadow-custom-m-gray text-center w-1/2 border-2 border-blue mr-1'
      onClick={() => navigate(`/organization/${data.instanceId}`)}>
      <h1 className='font-extrabold'>{data.name}</h1>
      <p>{data.description}</p>
    </div>
  );
};

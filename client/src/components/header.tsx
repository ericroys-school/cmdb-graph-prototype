import { StyledNav } from '../lib/styledNav';
import { links } from '../config/data/navOptions';
import StyledIconText from '../lib/styledIconText';
import { FaBackwardStep } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import { FaStepForward } from 'react-icons/fa';

export const Header = () => {
  const navigate = useNavigate();
  return (
    <header
      className='flex flex-col-reverse flex-wrap w-full justify-center items-center bg-blue 
     drop-shadow-custom-m-black'>
      <div className='w-full text-center'>
        <div className='flex justify-center items-center'>
          <StyledIconText
            icon={FaBackwardStep}
            text=''
            size={40}
            iconClass='fill-redish'
            onClick={() => navigate(-1)}
          />
          <h1 className='mt-1 mb-1 font-extrabold text-4xl drop-shadow-custom-m-gray mr-2'>
            Proto-CMDB
          </h1>
          <StyledIconText
            icon={FaStepForward}
            text=''
            size={40}
            iconClass='fill-redish'
            onClick={() => navigate(+1)}
          />
        </div>
      </div>
      <div
        className='text-center w-full bg-gradient-to-b from-black to-white 
      h-14 bg-black flex items-center justify-center'>
        <StyledNav links={links} />
      </div>
    </header>
  );
};

import styled from 'styled-components';
import { StyledNav } from '../lib/styledNav';
import { links } from '../config/data/navOptions';

const header = styled.div`
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
  justify-content: space-between;
  justify-items: center;
  align-items: center;
  background-color: var(--seconday);
  border-width: 5px 0px;
  box-shadow: -15px 5px 70px 5px black;
`;

export const Header = () => {
  return (
    <header
      className='flex flex-col-reverse flex-wrap w-full justify-center items-center bg-blue 
     drop-shadow-custom-m-black'>
      <div className='w-full text-center'>
        <h1 className='mt-1 mb-1 font-extrabold text-4xl drop-shadow-custom-m-gray'>
          Proto-CMDB
        </h1>
      </div>
      <div
        className='text-center w-full bg-gradient-to-b from-black to-white 
      h-14 bg-black flex items-center justify-center'>
        <StyledNav links={links} />
      </div>
    </header>
  );
};

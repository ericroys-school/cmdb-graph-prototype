import { ApolloProvider } from '@apollo/client';
import { client } from './config/apollo';
import { Outlet } from 'react-router-dom';
import { Header } from './components/header';

const App: React.FC = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <Header />
      <ApolloProvider client={client}>
        <main className='mx-3 grow pb-10 mt-3'>
          <Outlet />
        </main>
      </ApolloProvider>
    </div>
  );
};
export default App;

import { ApolloProvider } from '@apollo/client';
import { client } from './config/apollo';
import { Outlet } from 'react-router-dom';
import { Header } from './components/header';
import { Footer } from './components/footer';

const App: React.FC = () => {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen'>
      <Header />
      <ApolloProvider client={client}>
        <main className='flex justify-center mx-3 grow pb-10 mt-3 w-full'>
          <Outlet />
        </main>
      </ApolloProvider>
      <Footer />
    </div>
  );
};
export default App;

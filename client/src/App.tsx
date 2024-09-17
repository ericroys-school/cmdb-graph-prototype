import { ApolloProvider } from '@apollo/client';
import { client } from './config/apollo';
// import { T } from './t'
import React from 'react';
// import { CreateCompany } from './components/createCompany';
import { Company } from './components/company';

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Company />
    </ApolloProvider>
  );
};
export default App;

import { ApolloProvider } from '@apollo/client';
import { client } from './config/apollo';
import { T } from './t'
import React from 'react';

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <T />
    </ApolloProvider>
  );
};
export default App;

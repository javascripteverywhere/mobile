import React from 'react';
import Screens from './screens';
// import the Apollo libraries
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

// import environment configuration
import getEnvVars from '../config';
const { API_URI } = getEnvVars();

// configure Apollo Client
const client = new ApolloClient({
  uri: API_URI
});

const Main = () => {
  // wrap our app in the ApolloProvider higher-order component
  return (
    <ApolloProvider client={client}>
      <Screens />
    </ApolloProvider>
  );
};

export default Main;

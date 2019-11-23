import React from 'react';
import Screens from './screens/index';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import * as SecureStore from 'expo-secure-store';

// import environment configuration
import getEnvVars from '../config';
const { API_URI } = getEnvVars();

// const API_URI = 'https://apollo-server-notedly-test.herokuapp.com/api';

// configure Apollo Client
const client = new ApolloClient({
  uri: API_URI,
  // include credentials on each API call
  fetchOptions: {
    credentials: 'include'
  },
  // add the token to the header
  request: async operation => {
    // get the token's value
    // if the token doesn't exist, the value is an empty string
    const token = (await SecureStore.getItemAsync('token')) || '';
    // send the token value in the header of each request
    operation.setContext({
      headers: {
        authorization: token
      }
    });
  }
});

const MainApp = () => {
  //wrap our app in the ApolloProvider higher-order component
  return (
    <ApolloProvider client={client}>
      <Screens />
    </ApolloProvider>
  );
};

export default MainApp;

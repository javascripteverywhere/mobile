import React from 'react';
import { View, Button, Text } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { Mutation, ApolloConsumer } from 'react-apollo';
import { gql } from 'apollo-boost';

import UserForm from '../components/UserForm';
import Loading from '../components/Loading';

const SIGNIN_USER = gql`
  mutation signIn($email: String, $password: String!) {
    signIn(email: $email, password: $password)
  }
`;

const SignIn = props => {
  // store the token with a key value of `token`
  // after the token is stored navigate to the app's main screen
  const storeToken = token => {
    SecureStore.setItemAsync('token', token).then(
      props.navigation.navigate('App')
    );
  };

  return (
    // Wrap our mutation in ApolloConsumer to give direct access to `client`
    <ApolloConsumer>
      {client => (
        // call our GraphQL Mutation
        <Mutation
          mutation={SIGNIN_USER}
          // pass the token value to our signInAsync function
          onCompleted={({ signIn }) => {
            storeToken(signIn);
          }}
          onError={err => null} // handled below
        >
          {(signIn, { loading, error }) => {
            // if loading, return a loading indicator
            if (loading) return <Loading />;
            // if there is an error, display a message to the user & the form
            if (error)
              return (
                <View>
                  <Text>Error Signing In</Text>
                  <UserForm
                    action={signIn}
                    formType="signIn"
                    navigation={props.navigation}
                  />
                </View>
              );
            // our form component
            return (
              <UserForm
                action={signIn}
                formType="signIn"
                navigation={props.navigation}
              />
            );
          }}
        </Mutation>
      )}
    </ApolloConsumer>
  );
};

SignIn.navigationOptions = {
  title: 'Sign In'
};

export default SignIn;

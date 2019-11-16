import React from 'react';
import { View, Button, Text, AsyncStorage } from 'react-native';
import { Mutation, ApolloConsumer } from 'react-apollo';
import { gql } from 'apollo-boost';

import UserForm from '../components/UserForm';
import Loading from '../components/Loading';

const SIGNUP_USER = gql`
  mutation signUp($email: String!, $username: String!, $password: String!) {
    signUp(email: $email, username: $username, password: $password)
  }
`;

const SignUp = props => {
  const storeToken = async token => {
    await AsyncStorage.setItem('token', token).then(
      props.navigation.navigate('App')
    );
  };

  return (
    // Wrap our mutation in ApolloConsumer to give direct access to `client`
    <ApolloConsumer>
      {client => (
        // render our GraphQL Mutation
        <Mutation
          mutation={SIGNUP_USER}
          onCompleted={({ signUp }) => {
            storeToken(signUp);
          }}
          onError={err => null} // handled below
        >
          {(signUp, { loading, error }) => {
            // if loading, return a loading indicator
            if (loading) return <Loading />;
            // if there is an error, display a message to the user
            if (error)
              return (
                <View>
                  <Text>Error Signing In</Text>
                  <UserForm
                    action={signUp}
                    formType="signUp"
                    navigation={props.navigation}
                  />
                </View>
              );
            // our form component
            return (
              <UserForm
                action={signUp}
                formType="signUp"
                navigation={props.navigation}
              />
            );
          }}
        </Mutation>
      )}
    </ApolloConsumer>
  );
};

SignUp.navigationOptions = {
  title: 'Register'
};

export default SignUp;

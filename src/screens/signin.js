import React from 'react';
import { View, Button, Text } from 'react-native';
import * as SecureStore from 'expo-secure-store';

const SignIn = props => {
  // store the token with a key value of `token`
  // after the token is stored navigate to the app's main screen
  const signInAsync = async token => {
    await SecureStore.setItemAsync('token', token).then(
      props.navigation.navigate('App')
    );
  };

  // on button press store a token with the string value of 'abc'
  return (
    <View>
      <Button title="Sign in!" onPress={signInAsync('abc')} />
    </View>
  );
};

SignIn.navigationOptions = {
  title: 'Sign In'
};

export default SignIn;

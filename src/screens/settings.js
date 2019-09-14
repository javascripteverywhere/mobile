import React from 'react';
import { View, Button } from 'react-native';
import * as SecureStore from 'expo-secure-store';

const Settings = props => {
  // delete the token then navigate to the auth screen
  const signOut = () => {};

  return (
    <View>
      <Button
        title="Press me"
        onPress={() => {
          SecureStore.deleteItemAsync('token').then(
            props.navigation.navigate('Auth')
          );
        }}
      />
    </View>
  );
};

Settings.navigationOptions = {
  title: 'Settings'
};

export default Settings;

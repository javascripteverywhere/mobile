import React from 'react';
import { Text, View } from 'react-native';

const Note = props => {
  const id = props.navigation.getParam('id');
  return (
    <View style={{ padding: 10 }}>
      <Text>This is note {id}</Text>
    </View>
  );
};

export default Note;

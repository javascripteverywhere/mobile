import React from 'react';
import { FlatList, View, TouchableOpacity, Text } from 'react-native';
import styled from 'styled-components/native';

import NoteComponent from './Note';

// our dummy data
// const notes = [
//   { id: 0, content: 'Giant Steps' },
//   { id: 1, content: 'Tomorrow Is The Question' },
//   { id: 2, content: 'Tonight At Noon' },
//   { id: 3, content: 'Out To Lunch' },
//   { id: 4, content: 'Green Street' },
//   { id: 5, content: 'In A Silent Way' },
//   { id: 6, content: 'Lanquidity' },
//   { id: 7, content: 'Nuff Said' },
//   { id: 8, content: 'Nova' },
//   { id: 9, content: 'The Awakening' }
// ];

// FeedView styled-component definition
const FeedView = styled.View`
  height: 100;
  overflow: hidden;
  margin-bottom: 10px;
`;

const Separator = styled.View`
  height: 1;
  width: 100%;
  background-color: #ced0ce;
`;

const NoteFeed = props => {
  return (
    <View>
      <FlatList
        data={props.notes}
        keyExtractor={item => item.id.toString()}
        ItemSeparatorComponent={() => <Separator />}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate('Note', {
                id: item.id
              })
            }
          >
            <FeedView>
              <NoteComponent note={item} />
            </FeedView>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default NoteFeed;

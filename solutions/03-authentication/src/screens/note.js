import React from 'react';
import { Text, View } from 'react-native';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import Note from '../components/Note';
import Loading from '../components/Loading';

// our note query, which accepts an ID variable
const GET_NOTE = gql`
  query note($id: ID!) {
    note(id: $id) {
      id
      createdAt
      content
      favoriteCount
      author {
        username
        id
        avatar
      }
    }
  }
`;

const NoteScreen = props => {
  const id = props.navigation.getParam('id');

  return (
    <Query query={GET_NOTE} variables={{ id }}>
      {({ data, loading, error }) => {
        if (loading) return <Loading />;
        // if there's an error, display this message to the user
        if (error) return <Text>Error! Note not found</Text>;
        // if successful, pass the data to the note component
        return <Note note={data.note} />;
      }}
    </Query>
  );
};

export default NoteScreen;

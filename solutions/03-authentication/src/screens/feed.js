import React from 'react';
import { View, Text } from 'react-native';
// import our Apollo libraries
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import NoteFeed from '../components/NoteFeed';
import Loading from '../components/Loading';

// compose our query
const GET_NOTES = gql`
  query notes {
    notes {
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

const Feed = props => {
  return (
    <Query query={GET_NOTES}>
      {({ data, loading, error }) => {
        // if the data is loading, our app will display a loading indicator
        if (loading) return <Loading />;
        // if there is an error fetching the data, display an error message
        if (error) return <Text>`Error! ${error.message}`</Text>;
        // if the query is successful and there are notes, return the feed of notes
        return <NoteFeed notes={data.notes} navigation={props.navigation} />;
      }}
    </Query>
  );
};

Feed.navigationOptions = {
  title: 'Feed'
};

export default Feed;

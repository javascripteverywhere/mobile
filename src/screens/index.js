import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

// Import screen components
import Feed from './feed';
import Favorites from './favorites';
import MyNotes from './mynotes';

const TabNavigator = createBottomTabNavigator({
  FeedScreen: {
    screen: Feed,
    navigationOptions: {
      tabBarLabel: 'Feed'
    }
  },
  MyNoteScreen: {
    screen: MyNotes,
    navigationOptions: {
      tabBarLabel: 'My Notes'
    }
  },
  FavoriteScreen: {
    screen: Favorites,
    navigationOptions: {
      tabBarLabel: 'Favorites'
    }
  }
});

// create the app container
export default createAppContainer(TabNavigator);

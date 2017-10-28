/*
  Brenden Miller
  Grocer
  CS 495
  Start Date: October 27, 2017
*/

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// npm install --save react-navigation
import { TabNavigator } from 'react-navigation';

// Screen imports
import AddNewScreen from './src/screens/AddNewScreen';
import AuthScreen from './src/screens/AuthScreen';
import GroceryListScreen from './src/screens/GroceryListScreen';
import RecipesScreen from './src/screens/RecipesScreen';
import SwipeScreen from './src/screens/SwipeScreen';

export default class App extends React.Component {
  render() {
    const MainNavigator = TabNavigator({
      AuthScreen: { screen: AuthScreen },
      
    })

    return (
      <View style={styles.container}>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});

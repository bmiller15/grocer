/*
  Brenden Miller
  Grocer
  CS 495
  Start Date: October 27, 2017
*/

import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TabNavigator } from 'react-navigation';

// Screen imports
import AddNewScreen from './src/screens/AddNewScreen';
import AuthScreen from './src/screens/AuthScreen';
import GroceryListScreen from './src/screens/GroceryListScreen';
import RecipesScreen from './src/screens/RecipesScreen';
import SwipeScreen from './src/screens/SwipeScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
// Possibly add a settings?
// Also possiblilty of having a social feed and send grocery list through texts
// Have grocery items that are marked as permenitly had (ie. salt)

// App.js (main file)
export default class App extends React.Component {
  render() {
    // Bottom navigation
    const MainNavigator = TabNavigator({
      // First two will become skipped if signed in previously(autohydrate?)
      // Possibly make WelcomeScreen only play once?
      // No FB intergration, just doing sign in
      WelcomeScreen: { screen: WelcomeScreen },
      AuthScreen: { screen: AuthScreen },
      main: {
        // main navigation: Swipe, Grocery, Recipes, Add
        screen: TabNavigator(
          {
            SwipeScreen: { screen: SwipeScreen },
            GroceryListScreen: { screen: GroceryListScreen },
            RecipesScreen: { screen: RecipesScreen },
            AddNewScreen: { screen: AddNewScreen }
          },
          {
            tabBarPosition: 'bottom',
            lazy: true,
            tabBarOptions: {
              showIcon: true,
              labelStyle: { fontSize: 12 },
              iconStyle: {
                width: 30,
                height: 30
              }
            }
          }
        )
      }
    });

    return (
      <View style={styles.container}>
        <MainNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});

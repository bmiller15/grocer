/*
  Brenden Miller
  Grocer
  Start Date: October 27, 2017
*/

import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import firebase from 'firebase';
import { Provider } from 'react-redux';

// Store import
import store from './src/store';
// Screen imports
import AddNewScreen from './src/screens/AddNewScreen';
import AuthScreen from './src/screens/AuthScreen';
import GroceryListScreen from './src/screens/GroceryListScreen';
import RecipesScreen from './src/screens/RecipesScreen';
import SwipeScreen from './src/screens/SwipeScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import SettingsScreen from './src/screens/SettingsScreen';

// Possibly add a settings?
// Also possiblilty of having a social feed and send grocery list through texts
// Have grocery items that are marked as permenitly had (ie. salt)

// App.js (main file)
export default class App extends React.Component {

  //////////////////////////////////////////////////////////////////////////////
  // Setup some warnings to ignore
  // https://github.com/firebase/firebase-js-sdk/issues/97
  constructor() {
    super();
    console.ignoredYellowBox = ['Setting a timer'];
  }

  // Initialize firebase
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBTdlC-4TyW8rwgG6oEE5CApfpgl81x6Yc',
      authDomain: 'grocer-a0b37.firebaseapp.com',
      databaseURL: 'https://grocer-a0b37.firebaseio.com',
      projectId: 'grocer-a0b37',
      storageBucket: '',
      messagingSenderId: '307732369632'
    });
  }

  render() {
    // Bottom navigation bar
    const MainNavigator = TabNavigator({
      // First two will become skipped if signed in previously(autohydrate?)
      // Possibly make WelcomeScreen only play once?
      // No FB intergration, just doing sign in
      WelcomeScreen: { screen: WelcomeScreen },
      AuthScreen: { screen: AuthScreen },
      //settings go somewhere here
      main: {
        // main navigation: Swipe, Grocery, Recipes, Add
        screen: TabNavigator(
          {
            Swipe: { screen: StackNavigator({
              Swipe: { screen: SwipeScreen }, setings: { screen: SettingsScreen }
            }) },
            List: { screen: StackNavigator({
              List: { screen: GroceryListScreen }, settings: { screen: SettingsScreen }
            }) },
            Recipes: { screen: StackNavigator({
              Recipes: { screen: RecipesScreen }, settings: { screen: SettingsScreen }
            }) },
            Add: { screen: StackNavigator({
              Add: { screen: AddNewScreen }, settings: { screen: SettingsScreen }
            }) }
          },
          {
            // Styling object for core 4 screens
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
          })
      }
    },
    {
      // Styling object for first two screens to be rendered invisible
      tabBarPosition: 'bottom',
      lazy: true,
      navigationOptions: {
        tabBarVisible: false,
        animationEnabled: false,
        swipeEnabled: false
      },
    });

    return (
      <Provider store={store}>
        <View style={styles.container}>
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

/*
  Brenden Miller
  Grocer
  Start Date: October 27, 2017
*/

import React from 'react';
import { StyleSheet, View } from 'react-native';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import Router from './src//Router';
// Store import
import store from './src/store';


export default class App extends React.Component {

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
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Router />
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

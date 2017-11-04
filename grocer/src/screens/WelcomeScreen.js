import _ from 'lodash';
import React, { Component } from 'react';
import { ActivityIndicator, AsyncStorage } from 'react-native';
import Slides from '../components/Slides';

//  WelcomeScreen
/*
      Introduction to using Grocery
      Slide style
*/
const SLIDE_DATA = [
  { text: 'Welcome to Grocer', color: '#938480' },
  { text: 'Create recipes with the Add tab', color: '#8895AA' },
  { text: 'Swipe a recipe to create a grocery list', color: '#938480' }
];

class WelcomeScreen extends Component {
  // State definition
  state = { welcomeCompleted: null };

  // Check if logged in; if so, skip the welcome/login screens and jump to main page
  async componentWillMount() {
    //AsyncStorage.removeItem("welcome_completed"); // Just used for testing to clear item
    try {
      const welcomeCompleted = await AsyncStorage.getItem('welcome_completed');

      if (welcomeCompleted) {
        return this.props.navigation.navigate('AuthScreen');
        //this.setState({ welcomeCompleted });
      }
      this.setState({ welcomeCompleted: false });
    } catch (err) {
      console.error(err);
    }
  }

  // Navigate to AuthScreen when slides are complete
  onSlidesComplete = () => {
    try {
      AsyncStorage.setItem('welcome_completed', 'true');
    } catch (err) {
      console.error(err);
    }
    return this.props.navigation.navigate('AuthScreen');
    //this.props.navigation.navigate('AuthScreen', { param: 'Param test!!' });
  };

  // Main render method
  render() {
    if (_.isNull(this.state.welcomeCompleted)) {
      // return <AppLoading />; Apparently only works in iOS and in App.js
      return <ActivityIndicator size="large" style={styles.spinnerStyle} />;
    }
    return <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete} />;
  }
}

// Styles object
const styles = {
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export default WelcomeScreen;

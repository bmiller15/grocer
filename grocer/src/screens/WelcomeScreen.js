import React, { Component } from 'react';
import { View, Text } from 'react-native';
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

  // Navigate to auth when slides are complete
  onSlidesComplete = () => {
    this.props.navigation.navigate('AuthScreen');
  }

  render() {
    return <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete} />;
  }
}

export default WelcomeScreen;

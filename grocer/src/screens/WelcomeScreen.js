import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Slides from '../components/Slides';

//  WelcomeScreen
/*
      Introduction to using Grocery
      Slide style
*/
const SLIDE_DATA = [
  { text: 'Welcome to Grocer' },
  { text: 'Create recipes with the Add tab' },
  { text: 'Swipe recipe book to create a grocery list' }
];

class WelcomeScreen extends Component {
  render() {
    return <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete} />;
  }
}

export default WelcomeScreen;

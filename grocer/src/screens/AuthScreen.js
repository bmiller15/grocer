import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Card, Button, Icon } from 'react-native-elements';
import { Spinner } from '../components/Spinner';

/*
  Main Authentication
  will skip if previously logged in
*/

class AuthScreen extends Component {
  // Navigation Options to Impliment the bottom bar icons not in here tho
  static navigationOptions = {

  }

  // Initial state definition
  state = { email: '', password: '', error: '', loading: false };

  // When they press the LoginButton
  onLoginPress() {
    // Default construction
    const { email, password } = this.state;

    // Sets loading to true while we check authentication
    this.setState({ error: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(this.onLoginFail.bind(this));
  }

  // When login fails
  // Impliment possible sign up from here ? also display error message
  onLoginFail() {
    this.setState({ error: 'Authentication Failed', loading: false });
  }

  // When login succeeds
  // Possible leave email as current email?
  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    });
  }

  // Signup page redirect
  onSignupLoginPress() {

  }

  ////////////////////////////////////////////////////////////////////
  // Button Render Method
  ////////////////////////////////////////////////////////////////////
  renderButtons() {
    // Display spinner during authentication
    if (this.state.loading) {
      return <Spinner size="small" />;
    }

    return (
      <View>
        <Button onPress={this.onLoginPress.bind(this)}>
          Log In
        </Button>
      </View>
    );
  }


  ////////////////////////////////////////////////////////////////////
  // Main Render Method
  ////////////////////////////////////////////////////////////////////
  render() {
    return (
      <View>
        {this.renderButtons()}
      </View>
    );
  }
}

export default AuthScreen;

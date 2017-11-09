import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback, KeyboardAvoidingView } from 'react-native';
import firebase from 'firebase';
import {
  FormLabel,
  FormInput,
  FormValidationMessage,
  Button,
} from 'react-native-elements';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Spinner } from '../components/Spinner';

// Purpose of this auth screen is just to call action creator
class AuthScreen extends Component {
  //////////////////////////////////////////////////////////////////////////////////
  // State definition
  state = { inSignupMode: false, showLoading: true }; // Just for local use

  //////////////////////////////////////////////////////////////////////////////////
  // Register the event which detects a change of state in the logged-in user
  componentWillMount() {
    //this.props.loading = true;

    // Check if user is persisted and "login" by navigating to main if so
    if (firebase.auth().currentUser) {
      return this.props.navigation.navigate('main'); // Navigate to main page
    }

    //console.log(this.props.navigation.state.params);

    // Listen for authentication state to change.
    firebase.auth().onAuthStateChanged(user => {
      // Show login screen b/c firebase has just authenticated/denied user
      this.props.loading = false;
      this.setState({ showLoading: this.props.loading }); // Retrigger components

      console.log('onAuthStateChanged()');
      if (user) {
        // Navigate to main page
        this.props.navigation.navigate('main');
        return;
      }

      this.props.navigation.navigate('auth');
    });
  }

  //////////////////////////////////////////////////////////////////////////////////
  // Update the property when changed
  onEmailChange = text => {
    this.props.emailChanged(text);
  };

  //////////////////////////////////////////////////////////////////////////////////
  // Update the property when changed
  onPasswordChange = text => {
    this.props.passwordChanged(text);
  };

  //////////////////////////////////////////////////////////////////////////////////
  // Update the property when changed
  onPasswordRetypeChange = text => {
    this.props.passwordRetypeChanged(text);
  };

  //////////////////////////////////////////////////////////////////////////////////
  // Login user via username/password
  onStandardLoginButtonPress = () => {
    const { email, password } = this.props;
    this.props.loginUser(email, password);
  };

  //////////////////////////////////////////////////////////////////////////////////
  // Login user via username/password
  onStandardSignupButtonPress = () => {
    const { email, password, passwordRetype } = this.props;
    this.props.signupUser(email, password, passwordRetype);
  };

  //////////////////////////////////////////////////////////////////////////////////
  // Toggles between Login mode and Signup mode
  onSignupLoginToggle = () => {
    this.setState({ inSignupMode: !this.state.inSignupMode });
    this.props.resetSignupLoginPages();
  };

  //////////////////////////////////////////////////////////////////////////////////
  // Render login buttons conditionally (show spinner when working on login)
  renderButtons() {
    if (this.state.inSignupMode) {
      return (
        <View>
          <Button
            title="Sign Up"
            //icon={{ name: 'vpn-key' }}
            backgroundColor={'#938480'}
            onPress={this.onStandardSignupButtonPress}
          />

          <View style={styles.detailWrapperStyle}>
            <Text style={{ textAlign: 'center' }}>Already have an account?&nbsp;</Text>
            <TouchableWithoutFeedback onPress={this.onSignupLoginToggle}>
              <View>
                <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>Log In</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      );
    }
    return (
      <View>
        <Button
          title="Log In"
          //icon={{ name: 'vpn-key' }}
          backgroundColor={'#938480'}
          onPress={this.onStandardLoginButtonPress}
        />

        <View style={styles.detailWrapperStyle}>
          <Text style={{ textAlign: 'center' }}>Dont have an account?&nbsp;</Text>
          <TouchableWithoutFeedback onPress={this.onSignupLoginToggle}>
            <View>
              <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>Sign Up</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    );
  }

  //////////////////////////////////////////////////////////////////////////////////
  // Render password retype button if in signup mode
  renderPasswordRetypeButton() {
    if (this.state.inSignupMode) {
      return (
        <View style={{ marginBottom: 10 }}>
          <FormLabel>Retype Password</FormLabel>
          <FormInput
            placeholder="retype password"
            secureTextEntry
            value={this.props.passwordRetype}
            onChangeText={this.onPasswordRetypeChange}
            style={{ color: 'black' }}
          />
        </View>
      );
    }
  }

  //////////////////////////////////////////////////////////////////////////////////
  // Get screen style (used to center activity spinner when loading)
  getScreenStyle() {
    if (this.state.showLoading) {
      return styles.spinnerStyle;
    }
    return { flex: 1 };
  }

  //////////////////////////////////////////////////////////////////////////////////
  // Render loading screen (if attempting a persist login) or login screen
  renderContent() {
    if (this.state.showLoading) {
      return <Spinner size="large" message="Authenticating..." />;
    }
    return (
        <KeyboardAvoidingView behavior='padding' style={styles.backgroundStyle}>
            <View style={{ marginBottom: 10 }}>
              <FormLabel>E-mail</FormLabel>
              <FormInput
                placeholder="example@email.com"
                value={this.props.email}
                onChangeText={this.onEmailChange}
                style={{ color: 'black' }}
              />
            </View>

            <View style={{ marginBottom: 10 }}>
              <FormLabel>Password</FormLabel>
              <FormInput
                placeholder="password"
                secureTextEntry
                value={this.props.password}
                onChangeText={this.onPasswordChange}
                style={{ color: 'black' }}
              />
            </View>

            {this.renderPasswordRetypeButton()}

            <FormValidationMessage containerStyle={{ marginBottom: 10 }}>
              {this.props.error}
            </FormValidationMessage>

            {this.renderButtons()}
        </KeyboardAvoidingView>
    );
  }

  //////////////////////////////////////////////////////////////////////////////////
  // Main render method
  render() {
    return <View style={this.getScreenStyle()}>{this.renderContent()}</View>;
  }
}

//////////////////////////////////////////////////////////////////////////////////
// Styles object
const styles = {
  detailWrapperStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 10
  },
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  backgroundStyle: {
    backgroundColor: '#8895AA',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingTop: 20
  }
};

//////////////////////////////////////////////////////////////////////////////////
// Map redux reducers to component props.
function mapStateToProps({ auth }) {
  return {
    email: auth.email,
    password: auth.password,
    passwordRetype: auth.passwordRetype,
    error: auth.error,
    loading: auth.loading,
  };
}

export default connect(mapStateToProps, actions)(AuthScreen);

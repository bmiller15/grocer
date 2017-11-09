import React, { Component } from 'react';
import { View, ScrollView, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import { Card, Button, Icon, FormInput } from 'react-native-elements';
import * as actions from '../actions';

//
class AddNewScreen extends Component {
    static navigationOptions = ({ navigation }) => {
      return ({
          tabBarLabel: 'Add',
          tabBarIcon: ({ tintColor }) => {
              return <Icon type='Ionicons' name='add' size={30} color={tintColor} />;
          },
          headerRight: (
              <Button
                  title="Sign Out"
                  onPress={() => navigation.navigate('settings')}
                  backgroundColor="rgba(0, 0, 0, 0)"
                  color="rgba(0, 122, 255, 1)"
              />
          )
      });
  }

  // submit at the bototm after changing all the texts
  // enter in every field. maybe generate more add steps wth a button?

  // OnNameChange //reducer and action possibly?
  onNameChanged = text => {
    this.props.name(text);
  };

  // onPictureChange
  onPictureChanged = text => {
    this.props.pictureChanged(text);
  };

  // onIngredientChange
  onIngredientChanged = text => {
    this.props.ingredientChanged(text);
  };

  // OnStepChange
  onStepChanged = text => {
    this.props.stepChanged(text);
  }

  // onStandardSubmitPress
  onStandardSubmitPress = {

  }

  // Render buttons
  renderButton() {
    return (
      <View style={{ marginBottom: 10 }}>
        <Button
          title="Save Recipe"
          onPress={this.onStandardSubmitPress}
          style={'#938480'}
        />
      </View>
    );
  }

  // Render Add Cards
  renderAddCards() {
        return (
          <KeyboardAvoidingView behavior='padding'>
            <Card title="Add New Recipe">
              <View style={{ height: 500 }}>

                <View style={styles.detailWrapper}>
                  <FormInput
                    title="Add Name"
                    style={{ color: 'black' }}
                    onChangeText={(text) => this.onNameChanged({ text })}
                    value={this.state.name}
                  />
                </View>

                <View style={styles.detailWrapper}>
                  <FormInput
                    title="Add Picture"
                    style={{ height: 50, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={(text) => this.onPictureChanged({ text })}
                    value={this.state.picture}
                  />
                </View>

                <View style={styles.detailWrapper}>
                  <FormInput
                    title="Add Ingredients"
                    style={{ height: 60, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={(text) => this.onIngredientChanged({ text })}
                    value={this.state.ingredients}
                  />
                </View>

                <View style={styles.detailWrapper}>
                  <FormInput
                    title="Add Step"
                    style={{ height: 70, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={(text) => this.onStepChanged({ text })}
                    value={this.state.steps}
                  />
                </View>

                {this.renderButtons()}

              </View>
            </Card>
          </KeyboardAvoidingView>
        );
  }


  ///////////////////////////////////////////////////////////////
  // Main Render Method
  ///////////////////////////////////////////////////////////////
  render() {
    return (
      <View style={{ backgroundColor: '#8895AA' }}>
        <ScrollView>
          {this.renderAddCards()}
        </ScrollView>
      </View>
    );
  }
}

// Main style
const styles = {
  detailWrapper: {
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#938480'
  },
  backgroundStyle: {

  }
};

// mapStateToProps
function mapStateToProps({ recipe }) {
  return {
    name: recipe.name,
    picture: recipe.picture,
    ingredients: recipe.ingredients,
    steps: recipe.steps
  };
}

export default connect(mapStateToProps, actions)(AddNewScreen);

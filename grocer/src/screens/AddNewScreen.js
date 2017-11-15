import React, { Component } from 'react';
import { View, ScrollView, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import { Card, Button, Icon, FormInput } from 'react-native-elements';
import * as actions from '../actions';
import { PRIMARY_COLOR, SECONDARY_COLOR, TERTIARY_COLOR } from '../constants/styles';

// Add New Screen adds a new card to the grocery list
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
    this.props.nameChanged(text);
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
  onStandardSubmitPress = () => {
    const { recipe } = this.props;
    this.props.standardSubmitPress(recipe);
    //call reset
  };

  // Render buttons
  renderButtons() {
    return (
      <View style={{ marginBottom: 10 }}>
        <Button
          title="Save Recipe"
          onPress={this.onStandardSubmitPress}
        />
      </View>
    );
  }

 /// 
  // Render Add Cards
  renderAddCards() {
        return (
          <KeyboardAvoidingView behavior='padding' style={styles.backgroundStyle}>
            <Card
              title="Add New Recipe"
              style={{ backgroundColor: TERTIARY_COLOR }}
              titleStyle={{ marginTop: 10, fontSize: 20 }}
            >
              <View style={{ height: 500 }}>

                <View style={styles.detailWrapper}>
                  <FormInput
                    placeholder="Add Name"
                    style={{ color: 'black' }}
                    onChangeText={(text) => this.onNameChanged(text)}
                    value={this.props.name}
                  />
                </View>

                <View style={styles.detailWrapper}>
                  <FormInput
                    placeholder="Add Picture"
                    style={{ color: 'black' }}
                    onChangeText={(text) => this.onPictureChanged(text)}
                    value={this.props.picture}
                  />
                </View>

                <View style={styles.detailWrapper}>
                  <FormInput
                    placeholder="Add Ingredients"
                    style={{ height: 100 }}
                    onChangeText={(text) => this.onIngredientChanged(text)}
                    value={this.props.ingredients}
                  />
                </View>

                <View style={styles.detailWrapper}>
                  <FormInput
                    placeholder="Add Step"
                    style={{ height: 100 }}
                    onChangeText={(text) => this.onStepChanged(text)}
                    value={this.props.steps}
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
        <ScrollView style={{ flex: 1, backgroundColor: PRIMARY_COLOR }}>
          {this.renderAddCards()}
        </ScrollView>
    );
  }
}

// Main style
const styles = {
  detailWrapper: {
    marginTop: 10,
    marginBottom: 10
  },
  backgroundStyle: {
    backgroundColor: PRIMARY_COLOR,
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20
  }
};

function mapStateToProps({ recipes }) {
  return {
    recipe: recipes.recipe
  };
}

export default connect(mapStateToProps, actions)(AddNewScreen);

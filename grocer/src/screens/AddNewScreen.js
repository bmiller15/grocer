import React, { Component } from 'react';
import { View, ScrollView, TextInput, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import { Card, Button, Icon } from 'react-native-elements';

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
  onNameChange = text => {
    this.props.nameChange(text);
  };

  // onPictureChange
  onPictureChange = text => {
    this.props.pictureChange(text);
  };

  // onIngredientChange
  onIngredientChange = text => {
    this.props.ingredientChange(text);
  };

  // OnStepChange
  onStepChange = text => {
    this.props.stepChange(text);
  }
  // onStandardSubmitPress
  onStandardSubmitPress = () => {
    const { name, picture, ingredient, step } = this.props;
    this.props.standardSubmitPress(name, picture, ingredient, step);
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

              // Name change
              <View style={styles.detailWrapper}>
                <TextInput
                  title="Add a Name"
                  style={{ color: 'black' }}
                  onChangeText={(text) => this.onNameChange({ text })}
                  value={this.state.pictureChange}
                />
              </View>

              // Picture Change
              <View style={styles.detailWrapper}>
                <TextInput
                  title="Add a Picture"
                  style={{ height: 50, borderColor: 'gray', borderWidth: 1 }}
                  onChangeText={(text) => this.onPictureChange({ text })}
                  value={this.state.text}
                />
              </View>

              // Ingredient change
              <View style={styles.detailWrapper}>
                <TextInput
                  title="Add an Ingredient"
                  style={{ height: 60, borderColor: 'gray', borderWidth: 1 }}
                  onChangeText={(text) => this.onIngredientChange({ text })}
                  value={this.state.text}
                />
              </View>

              // Step Change
              <View style={styles.detailWrapper}>
                <TextInput
                  title="Add Step"
                  style={{ height: 70, borderColor: 'gray', borderWidth: 1 }}
                  onChangeText={(text) => this.onStepChange({ text })}
                  value={this.state.text}
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
function mapStateToProps(state) {
  return { recipeList: state.recipeList };
}

export default connect(mapStateToProps)(AddNewScreen);

import React, { Component } from 'react';
import { View, ScrollView, KeyboardAvoidingView, Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, Button, Icon } from 'react-native-elements';
import * as actions from '../actions';
import { PRIMARY_COLOR, SECONDARY_COLOR, TERTIARY_COLOR } from '../constants/styles';

class RecipesScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return ({
        tabBarLabel: 'Recipe List',
        tabBarIcon: ({ tintColor }) => {
            return <Icon type='entypo' name='list' size={30} color={tintColor} />;
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
//////////////////////////////////////////////////////////////////////////////////
// renderNoRecipeCards
//////////////////////////////////////////////////////////////////////////////////
    renderNoRecipeCards() {
      return (
        <Card title='No Recipes to List'>
          <Button
            title='Add New Recipes'
            large
            style={{ backgroundColor: TERTIARY_COLOR }}
            onPress={() => this.props.navigation.navigate('Add')}
          />
        </Card>
      );
    }

//////////////////////////////////////////////////////////////////////////////////
// renderRecipeCards
//////////////////////////////////////////////////////////////////////////////////
  renderRecipeCards() {
    // going to need to change this to length of array
    if (this.props.recipe.name === '') {
      return this.renderNoRecipeCards();
    }
      return (
        <Card
          title={this.props.recipe.name}
          style={{ backgroundColor: TERTIARY_COLOR }}
        >
          <View style={{ height: 200 }}>
            <Text>{this.props.recipe.picture}</Text>
          </View>
        </Card>
      );
  }

//////////////////////////////////////////////////////////////////////////////////
// Main render method
//////////////////////////////////////////////////////////////////////////////////
  render() {
    return (
      <ScrollView style={styles.containerWrapper}>
        {this.renderRecipeCards()}
      </ScrollView>
    );
  }
}

//////////////////////////////////////////////////////////////////////////////////
// Styles
//////////////////////////////////////////////////////////////////////////////////
const styles = {
  detailWrapper: {
    flex: 1
  },
  containerWrapper: {
    backgroundColor: PRIMARY_COLOR
  }
};


function mapStateToProps({ recipes }) {
  return {
    recipe: recipes.recipe
  };
}

export default connect(mapStateToProps, actions)(RecipesScreen);

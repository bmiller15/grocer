import React, { Component } from 'react';
import { View, ScrollView, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import { Card, Button, Icon, FormInput } from 'react-native-elements';
import * as actions from '../actions';
import { PRIMARY_COLOR, SECONDARY_COLOR, TERTIARY_COLOR } from '../constants/styles';
import Swipe from '../components/Swipe';

class SwipeScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return ({
        tabBarLabel: 'Swipe',
        tabBarIcon: ({ tintColor }) => {
            return <Icon type='foundation' name='page-multiple' size={30} color={tintColor} />;
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

  // Render Card
  renderCard(recipe){

  }

  // Render No More cards
  renderNoMoreCards = () => {

  }

  //////////////////////////////////////////////////////////////
  // Main Render method
  //////////////////////////////////////////////////////////////
  render() {
    return (
      <View>
        <Swipe
          data={this.props.recipes}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
          onSwipeRight={recipe => this.props.likeRecipe(recipe)}
        />
      </View>
    );
  }
}

export default SwipeScreen;

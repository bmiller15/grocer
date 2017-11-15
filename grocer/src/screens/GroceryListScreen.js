import React, { Component } from 'react';
import { View, ScrollView, KeyboardAvoidingView, Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, Button, Icon } from 'react-native-elements';
import * as actions from '../actions';

class GroceryListScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return ({
        tabBarLabel: 'Grocery List',
        tabBarIcon: ({ tintColor }) => {
            return <Icon type='materialIcons' name='local-grocery-store' size={30} color={tintColor} />;
        },
        headerRight: (
            <Button
                title="Si gn Out"
                onPress={() => navigation.navigate('settings')}
                backgroundColor="rgba(0, 0, 0, 0)"
                color="rgba(0, 122, 255, 1)"
            />
        )
    });
}
  render() {
    return (
      <View>
        <Text>GroceryListScreen</Text>
        <Text>GroceryListScreen</Text>
        <Text>GroceryListScreen</Text>
        <Text>GroceryListScreen</Text>
        <Text>GroceryListScreen</Text>
        <Text>GroceryListScreen</Text>
      </View>
    );
  }
}

export default GroceryListScreen;

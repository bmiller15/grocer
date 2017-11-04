import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';

class SwipeScreen extends Component {
  static navigationOptions = ({ navigation }) => {
      return ({
          tabBarLabel: 'Swipe',
          tabBarIcon: ({ tintColor }) => {
              return <Icon type='Foundation' name='pages' size={30} color={tintColor} />;
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


  render() {
    return (
      <View>
        <Text>SwipeScreen</Text>
        <Text>SwipeScreen</Text>
        <Text>SwipeScreen</Text>
        <Text>SwipeScreen</Text>
        <Text>SwipeScreen</Text>
        <Text>SwipeScreen</Text>
      </View>
    );
  }
}

export default SwipeScreen;

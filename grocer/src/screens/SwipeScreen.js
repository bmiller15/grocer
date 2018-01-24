import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, Button } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

import Swipe from '../components/Swipe';
import { recipeFetch, likeRecipe } from '../actions';
import PRIMARY_COLOR from '../constants/styles';

class SwipeScreen extends Component {
  componentWillMount() {
    this.props.recipeFetch();
  }

  renderCard(recipe) {
    return (
      <Card
        title={recipe.name}
        containerStyle={{ marginTop: 75, backgroundColor: PRIMARY_COLOR }}
      >
        <View style={{ marginTop: 10, marginBottom: 10 }}>
          <Text>{recipe.picture}</Text>
        </View>

        <View style={{ marginTop: 10, marginBottom: 10 }}>
          <Text>{recipe.ingredients}</Text>
        </View>

        <View style={{ marginTop: 10, marginBottom: 10 }}>
          <Text>{recipe.steps}</Text>
        </View>
      </Card>
    );
  }

  renderNoMoreCards = () => {
    return (
      <Card
        title="No More Recipes"
        containerStyle={{ marginTop: 75 }}
      >
        <Button
          title='Add More Recipes'
          large
          onPress={() => Actions.recipeCreate()}
        />
      </Card>
    );
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: PRIMARY_COLOR }}>
        <Swipe
          data={this.props.recipes}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
          onSwipeRight={recipe => this.props.likeRecipe(recipe)}
          keyProp="uid"
        />
      </View>
    );
  }
}

const styles = {
  detailWrapperStyle: {
    backgroundColor: PRIMARY_COLOR
  }
};

const mapStateToProps = state => {
  const recipes = _.map(state.recipes, (val, uid) => {
    return { ...val, uid };
  });

  return { recipes };
};

export default connect(mapStateToProps, { recipeFetch, likeRecipe })(SwipeScreen);

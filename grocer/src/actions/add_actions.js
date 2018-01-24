import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  RECIPE_UPDATE,
  RECIPE_CREATE,
  RECIPE_FETCH_SUCCESS,
  RECIPE_SAVE_SUCCESS,
  RECIPE_DELETE_SUCCESS,
  LIKE_RECIPE
} from './types.js';

/////////////////////////////////////////////////////
// Add New Card methods
/////////////////////////////////////////////////////


// Updates Recipe Card
export const recipeUpdate = ({ prop, value }) => {
  return {
      type: RECIPE_UPDATE,
      payload: { prop, value }
  };
};

export const recipeCreate = ({ name, picture, ingredients, steps }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
      firebase.database().ref(`/users/${currentUser.uid}/recipes`)
        .push({ name, picture, ingredients, steps })
        .then(() => {
          dispatch({ type: RECIPE_CREATE });
          Actions.recipeList();
        });
  };
};

export const likeRecipe = (recipe) => {
  const { currentUser } = firebase.auth();

    return () => {
      firebase.database().ref(`/users/${currentUser.uid}/likes`)
      .push({ recipe })
    };
};

export const likeFetch = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/likes`)
    .on('value', snapshot => {
      dispatch({ type: LIKE_RECIPE, payload: snapshot.val() })
    });
  };
};

export const recipeFetch = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/recipes`)
      .on('value', snapshot => {
        dispatch({ type: RECIPE_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};

export const recipeSave = ({ name, picture, ingredients, steps, uid }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/recipes/${uid}`)
    .set({ name, picture, ingredients, steps })
    .then(() => {
      dispatch({ type: RECIPE_SAVE_SUCCESS });
      Actions.recipeList();
    });
  };
};

export const likeDelete = ({ uid }) => {
  const { currentUser } = firebase.auth();

  return () => {
    firebase.database().ref(`/users/${currentUser.uid}/likes/${uid}`)
    .remove();
  };
};

export const recipeDelete = ({ uid }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/recipes/${uid}`)
    .remove()
    .then(() => {
      dispatch({ type: RECIPE_DELETE_SUCCESS });
      Actions.recipeList();
    });
  };
};

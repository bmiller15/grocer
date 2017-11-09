import {
  ADD_NAME_CHANGED,
  ADD_PICTURE_CHANGED,
  ADD_INGREDIENT_CHANGED,
  ADD_STEP_CHANGED,
  ADD_RECIPE
} from './types.js';

/////////////////////////////////////////////////////
// Add New Card methods
/////////////////////////////////////////////////////

// Called when name is changed
export const nameChanged = text => ({
  type: ADD_NAME_CHANGED,
  payload: text
});

// Called when picture is changed
export const pictureChanged = text => ({
  type: ADD_PICTURE_CHANGED,
  payload: text
});

// Called when ingredient is changed
export const ingredientChanged = text => ({
  type: ADD_INGREDIENT_CHANGED,
  payload: text
});

// Called when step is changed
export const stepChanged = text => ({
  type: ADD_STEP_CHANGED,
  payload: text
});

// Called when save is pushed, creates a card and exports it to state
export const standardSubmitPress = (name, picture, ingredients, steps) => {
  const recipe = { name, picture, ingredients, steps };
    return {
      payload: recipe,
      type: ADD_RECIPE
  };
};

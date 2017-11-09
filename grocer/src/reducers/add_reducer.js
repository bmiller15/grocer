import {
  ADD_NAME_CHANGED,
  ADD_PICTURE_CHANGED,
  ADD_STEP_CHANGED,
  ADD_INGREDIENT_CHANGED,
} from '../actions/types';

// Default state
const INITIAL_STATE = {
  name: '',
  picture: '',
  ingredients: '',
  steps: ''
};

// Reducers for Add Screen
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_NAME_CHANGED:
      return {
        ...state,
        name: action.payload
      };
    case ADD_PICTURE_CHANGED:
      return {
        ...state,
        picture: action.payload
      };
    case ADD_INGREDIENT_CHANGED:
      return {
        ...state,
        ingredients: action.payload
      };
    case ADD_STEP_CHANGED:
      return {
        ...state,
        steps: action.payload
      };
    default:
      return state;
  }
}

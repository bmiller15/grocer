import {
  ADD_NAME_CHANGED,
  ADD_PICTURE_CHANGED,
  ADD_STEP_CHANGED,
  ADD_INGREDIENT_CHANGED,
  RESET_ADD,
  FETCH_CARDS
} from '../actions/types';

// Default state
const INITIAL_STATE = {
  recipe: {
    name: '',
    picture: '',
    ingredients: '',
    steps: '',
  },
  recipeCards: []
};

// Reducers for Add Screen
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_NAME_CHANGED:
      return {
        ...state,
        recipe: {
          ...state.recipe,
          name: action.payload
        }
      };
    case ADD_PICTURE_CHANGED:
      return {
        ...state,
        recipe: {
          ...state.recipe,
          picture: action.payload
        }
      };
    case ADD_INGREDIENT_CHANGED:
      return {
        ...state,
        recipe: {
          ...state.recipe,
          ingredients: action.payload
        }
      };
    case ADD_STEP_CHANGED:
      return {
        ...state,
        recipe: {
          ...state.recipe,
          steps: action.payload
        }
      };
    case RESET_ADD:
      return {
        ...INITIAL_STATE
      };
    case FETCH_CARDS:
      return {
        ...state,
        recipe: action.payload,
        recipeCards: action.payload,
      };
    default:
      return state;
  }
}

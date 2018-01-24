import {
  RECIPE_FETCH_SUCCESS
} from '../actions/types';

// Default state
const INITIAL_STATE = {};

// Reducers for Add Screen
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RECIPE_FETCH_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

import {
  LIKE_RECIPE
} from '../actions/types';

const INITIAL_STATE = {};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case LIKE_RECIPE:
      return action.payload;
    default:
      return state;
  }
}

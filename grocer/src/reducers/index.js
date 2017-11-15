import { combineReducers } from 'redux';
import auth from './auth_reducer';
import recipes from './add_reducer';
import cards from './like_reducer';
////////////////////////////////////////////////////////////////////////
// Combines reducers and assigns reducer names
export default combineReducers({
  auth, recipes, cards
});

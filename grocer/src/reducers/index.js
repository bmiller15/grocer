import { combineReducers } from 'redux';
import auth from './auth_reducer';
import recipe from './add_reducer';
////////////////////////////////////////////////////////////////////////
// Combines reducers and assigns reducer names
export default combineReducers({
  auth, recipe
});

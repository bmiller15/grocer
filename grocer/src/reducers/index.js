import { combineReducers } from 'redux';
import AuthReducer from './auth_reducer';
import AddReducer from './add_reducer';
import LikesReducer from './like_reducer';
import FormReducer from './form_reducer';

////////////////////////////////////////////////////////////////////////
// Combines reducers and assigns reducer names
export default combineReducers({
  auth: AuthReducer,
  recipes: AddReducer,
  likes: LikesReducer,
  groceryForm: FormReducer
});

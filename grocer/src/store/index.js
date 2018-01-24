import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

const store = createStore(
  reducers,
  {},
  compose(
    applyMiddleware(thunk)
  )
);

// Whenever redux state changes, put it directly into AsyncStorage
// Whitelist says our redux state may have many different pieces of
// state/keys associated to it...we are only concerned with the
// likedJobs piece of state
//persistStore(store, { storage: AsyncStorage, whitelist: ['likedJobs'] });

// Run line below if want to purge AsyncStorage for this piece of state
//persistStore(store, { storage: AsyncStorage, whitelist: ['likedJobs'] }).purge();

export default store;

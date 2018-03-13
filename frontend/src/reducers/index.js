import { combineReducers } from 'redux';
import reducerA from './reducerA';
import currentUserReducer from './currentUser';

export default combineReducers({
  reducerA,
  currentUserReducer,
});;


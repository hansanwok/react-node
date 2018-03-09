import Immutable from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import { setUser } from 'utils/helper';
import { LOGIN_SUCCESS, LOGIN_FAIL } from 'actions/constants';


export const INITIAL_STATE = Immutable({
  currentUser: {
    name: null
  }
});

const onLoginSuccess = (state, { user }) => {
  const currentUser = setUser(user);
  return { ...state, currentUser };
 // state.set('currentUser', currentUser);
 // return state;
}

const ACTION_HANDLERS = {
  [LOGIN_SUCCESS]: onLoginSuccess,
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);

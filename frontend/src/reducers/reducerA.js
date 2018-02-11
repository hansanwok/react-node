import Immutable from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import { CHANGE_TEXT } from 'actions/constants';

export const INITIAL_STATE = Immutable({
  textA: 'huhu',
});

const onChangeText = (state, { text: textA }) => ({ ...state, textA });

const ACTION_HANDLERS = {
  [CHANGE_TEXT]: onChangeText,
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);

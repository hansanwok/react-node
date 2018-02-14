import Immutable from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import { CHANGE_TEXT, CALL_API_SUCCESS, CALL_API_FAIL } from 'actions/constants';

export const INITIAL_STATE = Immutable({
  textA: 'huhu',
  apiText: '',
  e: null,
});

const onChangeText = (state, { text: textA }) => ({ ...state, textA });

const onCallApiSuccess = (state, { data: apiText }) => ({ ...state, apiText })

const onCallApiFail = (state, { e: apiText }) => ({ ...state, apiText })

const ACTION_HANDLERS = {
  [CHANGE_TEXT]: onChangeText,
  [CALL_API_SUCCESS]: onCallApiSuccess,
  [CALL_API_FAIL]: onCallApiFail,
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);

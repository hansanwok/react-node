import Immutable from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import { CHANGE_TEXT, CALL_API_SUCCESS, CALL_API_FAIL, CHANGE_ELEMENT } from 'actions/constants';

export const INITIAL_STATE = Immutable({
  textA: 'huhu',
  apiText: '',
  e: null,
  testImu: [
    {
      name: 'sex',
      id: 1
    }, {
      name: 'laxcc',
      id: 2
    },
    {
      name: 'lalooo',
      id: 3
    },
    {
      name: 'laoa',
      id: 4
    },
    {
      name: 'bele',
      id: 5
    }
  ],
});

const onChangeText = (state, { text: textA }) => ({ ...state, textA });

const onCallApiSuccess = (state, { data: apiText }) => ({ ...state, apiText });

const onCallApiFail = (state, { e: apiText }) => ({ ...state, apiText });

const onChangeElement = (state, { element }) => {
  const testImu = Object.values(state.testImu);
  const index = testImu.findIndex(t => t.id === element.id)
  testImu[index] = element;
  return { ...state, testImu };
}

const ACTION_HANDLERS = {
  [CHANGE_TEXT]: onChangeText,
  [CALL_API_SUCCESS]: onCallApiSuccess,
  [CALL_API_FAIL]: onCallApiFail,
  [CHANGE_ELEMENT]: onChangeElement,
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);

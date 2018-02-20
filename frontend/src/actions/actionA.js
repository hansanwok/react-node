import {
  CHANGE_TEXT,
  CALL_API,
  CALL_API_FAIL,
  CALL_API_SUCCESS,
  CHANGE_ELEMENT,
} from './constants';

export const onChangeText = (text) => ({ text, type: CHANGE_TEXT });

export const onCallApi = () => ({ type: CALL_API });

export const onCallApiSuccess = (data) => ({ data, type: CALL_API_SUCCESS });

export const onCallApiFail = (e) => ({ e, type: CALL_API_FAIL });

export const onChangeElement = (element) => ({ element, type: CHANGE_ELEMENT}); 

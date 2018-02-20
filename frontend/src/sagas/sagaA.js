import { call, put, takeLatest } from 'redux-saga/effects';
import request, { requestOptions } from 'utils/request';
import { onCallApiSuccess, onCallApiFail } from 'actions/actionA';
import { CALL_API } from 'actions/constants';

export function* fetchData() {
  const requestURL = `/test`;
  const options = requestOptions.get();

  try {
    const res = yield call(request, requestURL, options);
    yield put(onCallApiSuccess(res.data));
  } catch (e) {
    yield put(onCallApiFail(e));
  }
};

export default function* sagaA() {
  yield takeLatest(CALL_API, fetchData);
}

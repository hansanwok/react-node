import { call, put, takeLatest } from 'redux-saga/effects';
import request, { requestOptions } from 'utils/request';
import { onLoginSuccess, onLoginFail } from 'actions/login';
import { LOGIN } from 'actions/constants';
import { push } from 'react-router-redux';

export function* login({ formLogin }) {
  const { name, password } = formLogin;
  const requestURL = `/login`;
  const options = requestOptions.post({
    name,
    password
  });

  try {
    const res = yield call(request, requestURL, options);
    yield put(onLoginSuccess(res.user));
    if (res.user) {
      yield put(push('/c'));
    }
  } catch (e) {
    yield put(onLoginFail(e));
  }
};

export default function* loginSaga() {
  yield takeLatest(LOGIN, login);
}

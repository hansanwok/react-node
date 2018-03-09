import { LOGIN, LOGIN_SUCCESS, LOGIN_FAIL } from './constants';

export const onLogin = (formLogin) => ({ formLogin, type: LOGIN });

export const onLoginSuccess = (user) => ({ user, type: LOGIN_SUCCESS });

export const onLoginFail = (err) => ({ err, type: LOGIN_FAIL });
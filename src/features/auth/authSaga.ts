import { PayloadAction } from '@reduxjs/toolkit';
import { delay, fork, take } from 'redux-saga/effects';
import { authAction, LoginPayload } from './authSlice';

function* handleLogin(payload: LoginPayload) {
  yield delay(500);
  localStorage.setItem('access_tooken', 'fake_tooken');

  //redirect home page
}

function* handleLogout() {
  yield delay(500);
  localStorage.removeItem('access_tooken');

  //redirect login page
}

function* watchLoginFlow() {
  while (true) {
    const isLogged = Boolean(localStorage.getItem('access_tooken'));
    if (!isLogged) {
      const action: PayloadAction<LoginPayload> = yield take(authAction.login.type);
      yield fork(handleLogin, action.payload);
    }

    yield take(authAction.logout.type);
    yield fork(handleLogout);
  }
}

export default function* authSaga() {
  yield fork(watchLoginFlow);
}

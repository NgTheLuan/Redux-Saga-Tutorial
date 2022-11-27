import { PayloadAction } from '@reduxjs/toolkit';
import { fork, take } from 'redux-saga/effects';
import { authAction, LoginPayload } from './authSlice';

function* handleLogin(payload: LoginPayload) {
  console.log(payload);
}

function* handleLogout() {}

function* watchLoginFlow() {
  const action: PayloadAction<LoginPayload> = yield take(authAction.login.type);
  yield fork(handleLogin, action.payload);

  yield take(authAction.logout.type);
  yield fork(handleLogout);
}

export default function* authSaga() {
  yield fork(watchLoginFlow);
}

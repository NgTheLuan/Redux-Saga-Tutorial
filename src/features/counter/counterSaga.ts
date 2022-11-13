import { PayloadAction } from '@reduxjs/toolkit';
import { delay, put, takeEvery } from 'redux-saga/effects';
import { incrementSagaFullfiled, incrementSagaRequesting } from './counterSlice';

// eslint-disable-next-line require-yield
function* handleIncrementSaga(action: PayloadAction<number>) {
  console.log('action saga :', action);

  //delay
  yield delay(2000);
  console.log('delay saga 2000');

  //dispatch action
  yield put(incrementSagaFullfiled(action.payload));
  console.log('action payload :', action.payload);
}

export default function* couterSaga() {
  console.log('counter saga');
  // Click 1, 2,3 time -> run 1, 2, 3
  yield takeEvery(incrementSagaRequesting.toString(), handleIncrementSaga);

  // Click 1, 2, 3 -> run 3;
  // yield takeLatest(incrementSagaRequesting.toString(), handleIncrementSaga);
}

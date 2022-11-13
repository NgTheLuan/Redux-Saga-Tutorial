import counterSaga from 'features/counter/counterSaga';
import { all } from 'redux-saga/effects';

// eslint-disable-next-line require-yield
export default function* rootSaga() {
  yield all([counterSaga()]);
}

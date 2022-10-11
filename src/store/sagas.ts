import { all } from 'redux-saga/effects';
import accountMiddleware from 'containers/account/middleware';

export default function* rootSaga() {
  yield all([...accountMiddleware]);
}

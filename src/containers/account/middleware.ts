import { put, takeLatest } from 'redux-saga/effects';
import { getAccountDetailsSuccessAction } from 'containers/account';
import { GET_ACCOUNT_DETAILS } from './constants';

export function* getAccountDetailsSaga() {
  try {
    // get account details
    console.log('get account saga');

    yield put(
      getAccountDetailsSuccessAction({
        accountId: '123',
        accountName: 'my account name',
        sanctuaryId: '456',
        sanctuaryName: 'my sanctuary name',
        loading: false,
      }),
    );
  } catch (error) {
    console.log(error);
  }
}

export default [takeLatest(GET_ACCOUNT_DETAILS, getAccountDetailsSaga)];

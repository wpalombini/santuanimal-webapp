import { call, put, takeLatest } from 'redux-saga/effects';
import {
  getAccountDetailsAction,
  getAccountDetailsFailureAction,
  getAccountDetailsSuccessAction,
} from 'containers/account';
import {
  GET_ACCOUNT_DETAILS,
  LOGIN_ACCOUNT,
  LOGIN_ACCOUNT_FAILURE,
  LOGIN_ACCOUNT_SUCCESS,
  LOGOUT_ACCOUNT,
} from './constants';
import { getAccountDetailsApi } from './api';
import { PayloadAction } from '@reduxjs/toolkit';
import { IAccountReducerState } from './interfaces';
import { getUserId, login, logout } from 'lib/utils';
import { loginFailureAction } from './actions';

export function* loginSaga() {
  try {
    yield call(login);
  } catch (error) {
    yield put(loginFailureAction('Error occurred while logging in.'));
  }
}

export function* loginSuccessSaga() {
  try {
    const userId: string = yield call(getUserId);
    if (userId) {
      yield put(getAccountDetailsAction({ accountId: userId } as IAccountReducerState));
    }
  } catch (error) {
    yield put(loginFailureAction('Error occurred while logging in.'));
  }
}

export function* loginFailureSaga() {
  yield call(logout);
}

export function* logoutSaga() {
  yield call(logout);
}

export function* getAccountDetailsSaga(action: PayloadAction<IAccountReducerState>) {
  try {
    // get account details
    const accountDetails: IAccountReducerState = yield call(getAccountDetailsApi as any, action.payload.accountId);

    yield put(getAccountDetailsSuccessAction(accountDetails));
  } catch (error) {
    yield put(getAccountDetailsFailureAction({ error: 'Error getting account details' } as IAccountReducerState));
  }
}

export default [
  takeLatest(LOGIN_ACCOUNT, loginSaga),
  takeLatest(LOGIN_ACCOUNT_SUCCESS, loginSuccessSaga),
  takeLatest(LOGIN_ACCOUNT_FAILURE, loginFailureSaga),
  takeLatest(LOGOUT_ACCOUNT, logoutSaga),
  takeLatest(GET_ACCOUNT_DETAILS, getAccountDetailsSaga),
];

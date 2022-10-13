import { call, put, takeLatest } from 'redux-saga/effects';
import { getAccountDetailsFailureAction, getAccountDetailsSuccessAction } from 'containers/account';
import { GET_ACCOUNT_DETAILS } from './constants';
import { getAccountDetailsApi } from './api';
import { PayloadAction } from '@reduxjs/toolkit';
import { IAccountReducerState } from './interfaces';

export function* getAccountDetailsSaga(action: PayloadAction<IAccountReducerState>) {
  try {
    // get account details
    const accountDetails: IAccountReducerState = yield call(getAccountDetailsApi as any, action.payload.accountId);

    yield put(getAccountDetailsSuccessAction(accountDetails));
  } catch (error) {
    yield put(getAccountDetailsFailureAction({ error: 'Error getting account details' } as IAccountReducerState));
  }
}

export default [takeLatest(GET_ACCOUNT_DETAILS, getAccountDetailsSaga)];

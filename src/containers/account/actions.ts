import { createAction } from '@reduxjs/toolkit';
import { payloadHelper } from 'lib/utils';
import {
  GET_ACCOUNT_DETAILS,
  GET_ACCOUNT_DETAILS_FAILURE,
  GET_ACCOUNT_DETAILS_SUCCESS,
  LOGIN_ACCOUNT,
  LOGIN_ACCOUNT_FAILURE,
  LOGIN_ACCOUNT_SUCCESS,
  LOGOUT_ACCOUNT,
} from './constants';
import { IAccountReducerState } from './interfaces';

export const loginAction = createAction(LOGIN_ACCOUNT);
export const loginSuccessAction = createAction(LOGIN_ACCOUNT_SUCCESS);
export const loginFailureAction = createAction(LOGIN_ACCOUNT_FAILURE, payloadHelper<string>);
export const logoutAction = createAction(LOGOUT_ACCOUNT);

export const getAccountDetailsAction = createAction(GET_ACCOUNT_DETAILS, payloadHelper<IAccountReducerState>);
export const getAccountDetailsSuccessAction = createAction(
  GET_ACCOUNT_DETAILS_SUCCESS,
  payloadHelper<IAccountReducerState>,
);
export const getAccountDetailsFailureAction = createAction(
  GET_ACCOUNT_DETAILS_FAILURE,
  payloadHelper<IAccountReducerState>,
);

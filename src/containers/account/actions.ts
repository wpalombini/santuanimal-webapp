import { createAction } from '@reduxjs/toolkit';
import { payloadHelper } from 'lib/utils';
import { GET_ACCOUNT_DETAILS, GET_ACCOUNT_DETAILS_FAILURE, GET_ACCOUNT_DETAILS_SUCCESS } from './constants';
import { IAccountReducerState } from './interfaces';

export const getAccountDetailsAction = createAction(GET_ACCOUNT_DETAILS, payloadHelper<IAccountReducerState>);
export const getAccountDetailsSuccessAction = createAction(
  GET_ACCOUNT_DETAILS_SUCCESS,
  payloadHelper<IAccountReducerState>,
);
export const getAccountDetailsFailureAction = createAction(
  GET_ACCOUNT_DETAILS_FAILURE,
  payloadHelper<IAccountReducerState>,
);

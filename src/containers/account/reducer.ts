import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import {
  getAccountDetailsAction,
  getAccountDetailsFailureAction,
  getAccountDetailsSuccessAction,
  resetAccountDetailsAction,
} from './actions';
import { IAccountReducerState } from './interfaces';

const initialState = {
  accountId: undefined,
  accountName: undefined,
  sanctuaryId: undefined,
  sanctuaryName: undefined,
  error: undefined,
  loading: false,
} as IAccountReducerState;

const accountReducer = createReducer(initialState, builder => {
  builder.addCase(getAccountDetailsAction, state => {
    state.loading = true;
  });
  builder.addCase(getAccountDetailsSuccessAction, (state, action) => {
    return {
      ...state,
      accountId: action.payload.accountId,
      accountName: action.payload.accountName,
      sanctuaryId: action.payload.sanctuaryId,
      sanctuaryName: action.payload.sanctuaryName,
      error: undefined,
      loading: false,
    };
  });
  builder.addCase(getAccountDetailsFailureAction, (state, action: PayloadAction<IAccountReducerState>) => {
    return {
      ...state,
      accountId: undefined,
      accountName: undefined,
      sanctuaryId: undefined,
      sanctuaryName: undefined,
      error: action.payload.error,
      loading: false,
    };
  });
  builder.addCase(resetAccountDetailsAction, state => {
    return {
      ...state,
      accountId: undefined,
      accountName: undefined,
      sanctuaryId: undefined,
      sanctuaryName: undefined,
      error: undefined,
      loading: false,
    };
  });
});

export default accountReducer;

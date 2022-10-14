import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import {
  getAccountDetailsAction,
  getAccountDetailsFailureAction,
  getAccountDetailsSuccessAction,
  loginAction,
  loginFailureAction,
  loginSuccessAction,
  logoutAction,
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
  builder.addCase(loginAction, state => {
    state.loading = true;
  });
  builder.addCase(loginSuccessAction, state => {
    return { ...state };
  });
  builder.addCase(loginFailureAction, (state, action) => {
    return {
      ...state,
      accountId: undefined,
      accountName: undefined,
      sanctuaryId: undefined,
      sanctuaryName: undefined,
      error: action.payload,
      loading: false,
    };
  });
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
  builder.addCase(logoutAction, state => {
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

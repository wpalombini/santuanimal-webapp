import { combineReducers } from '@reduxjs/toolkit';
import accountReducer from '../containers/account/reducer';

const rootReducer = combineReducers({
  account: accountReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

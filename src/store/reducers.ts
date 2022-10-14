import { combineReducers } from '@reduxjs/toolkit';
import routeReducer from 'containers/routes/reducer';
import accountReducer from 'containers/account/reducer';

const rootReducer = combineReducers({
  account: accountReducer,
  route: routeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

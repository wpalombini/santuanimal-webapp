import { createReducer } from '@reduxjs/toolkit';
import { appInitAction } from './actions';

const initialState = {
  isAppLoaded: false,
};

const routeReducer = createReducer(initialState, builder => {
  builder.addCase(appInitAction, state => {
    state.isAppLoaded = true;
  });
});

export default routeReducer;

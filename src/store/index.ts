import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas';

export const setupStore = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const middlewares: any[] = [];

  const sagaMiddleware = createSagaMiddleware();
  middlewares.push(sagaMiddleware);

  const store = configureStore({
    devTools: true,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(middlewares),
    reducer: rootReducer,
  });

  sagaMiddleware.run(rootSaga);

  return store;
};

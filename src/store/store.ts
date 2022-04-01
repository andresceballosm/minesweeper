import { configureStore, combineReducers } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import appReducer from './reducers/app.slice';
import gameReducer from './reducers/game.slice';
import rootSaga from './sagas/saga';

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  game: gameReducer,
  app: appReducer,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware({ thunk: false, serializableCheck: false }), sagaMiddleware],
});
sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;

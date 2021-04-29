import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import tasksReducer from './tasks/tasks.reducer';
import logger from 'redux-logger';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
  middleware: (defaultMiddlewares) => defaultMiddlewares().concat(logger),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

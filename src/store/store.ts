import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';
import { FLUSH, PAUSE, REGISTER, REHYDRATE } from 'redux-persist/es/constants';
import persistStore from 'redux-persist/es/persistStore';
import persistedReducer from './persistConfig';

const ignoredActions = [FLUSH, REHYDRATE, PAUSE, PURGE, REGISTER];

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions,
    },
  }),
  devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
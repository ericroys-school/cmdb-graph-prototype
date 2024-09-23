import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { companyMenuReducer } from '../reducers/company/company';
import storage from 'redux-persist/lib/storage';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
} from 'redux-persist';
import { orgMenuReducer } from '../reducers/organization/organization';

const persistConfig = {
  key: 'root',
  storage,
  timeout: 100000,
};

const rootReducers = combineReducers({
  companyMenu: companyMenuReducer.reducer,
  orgMenu: orgMenuReducer.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = configureStore({
  reducer: {
    reducer: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;

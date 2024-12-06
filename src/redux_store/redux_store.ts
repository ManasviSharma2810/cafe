
import { configureStore } from '@reduxjs/toolkit';
import appReducer from './appSlice'; 
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  app: appReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'], 
      },
    }),
});

export const persistor = persistStore(store);


export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

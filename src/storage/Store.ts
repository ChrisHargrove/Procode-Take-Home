import { persistStore } from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';
import Reducer from './Reducer';

const Store = configureStore({
  reducer: Reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable warnings about non-serializable values
    }),
});
const StorePersistor = persistStore(Store);

export { Store, StorePersistor };
export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;

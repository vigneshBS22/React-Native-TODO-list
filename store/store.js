import {configureStore} from '@reduxjs/toolkit';
import taskReducer from '../features/TaskSlice';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, taskReducer);

let store = configureStore({
  reducer: {tasks: persistedReducer},
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}),
});
let persistor = persistStore(store);

export {store, persistor};

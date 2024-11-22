import { combineReducers } from '@reduxjs/toolkit';
import todoReducer from './TodoReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist';

const config = {
  key: 'root',
  storage: AsyncStorage,
};

const reducer = persistReducer(
  config,
  combineReducers({
    todos: todoReducer,
  })
);
export default reducer;

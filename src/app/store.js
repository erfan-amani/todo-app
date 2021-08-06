import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../feature/todo/todo-slice';

const store = configureStore({
  reducer: todoReducer,
});

export default store;

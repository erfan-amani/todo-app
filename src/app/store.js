import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../feature/todo/todo-slice';
import categoryReducer from '../feature/category/category-slice';

const store = configureStore({
  reducer: {
    todo: todoReducer,
    category: categoryReducer,
  },
});

export default store;

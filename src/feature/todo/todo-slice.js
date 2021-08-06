import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    items: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.items.push({
        text: action.payload,
        completed: false,
        id: uuid(),
      });

      localStorage.setItem('todoList', JSON.stringify(state.items));
    },
    deleteTodo: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      localStorage.setItem('todoList', JSON.stringify(state.items));
    },
    toggleComplete: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );
      const item = state.items[itemIndex];
      state.items[itemIndex] = {
        ...item,
        completed: !item.completed,
      };
      localStorage.setItem('todoList', JSON.stringify(state.items));
    },
    replaceTodoList: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const {
  addTodo,
  deleteTodo,
  toggleComplete,
  replaceTodoList,
} = todoSlice.actions;

export default todoSlice.reducer;

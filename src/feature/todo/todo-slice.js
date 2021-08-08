import { createSlice, nanoid } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    items: [],
  },
  reducers: {
    addTodo: {
      reducer(state, action) {
        state.items.push(action.payload);

        localStorage.setItem('todoList', JSON.stringify(state.items));
      },
      prepare(text) {
        return {
          payload: {
            text,
            completed: false,
            id: nanoid(),
          },
        };
      },
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

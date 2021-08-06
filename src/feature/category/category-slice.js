import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
  name: 'category',
  initialState: { active: 'all' },
  reducers: {
    changeCategory: (state, action) => {
      state.active = action.payload;
    },
  },
});

export const { changeCategory } = categorySlice.actions;

export default categorySlice.reducer;

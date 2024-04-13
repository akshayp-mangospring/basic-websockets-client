import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, { payload }) {
      return state.filter(({ id }) => id !== payload);
    }
  }
});

// Here we have to explicitly export the actions and the reducers as well.
export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;

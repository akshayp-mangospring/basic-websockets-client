import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Since we are making API calls, API calls might return data or errors or different status codes as well.
// So, we need to handle all of that in Redux state as well. Only successful stuff goes into the actual state.

const initialState = {
  data: []
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: { },
  extraReducers: (builder) => {
    // Thunk Reducers
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

// Thunk Actions

export const getProducts = createAsyncThunk('products/get', async () => {
  const data = await fetch('https://fakestoreapi.com/products');
  const result = await data.json();

  return result;
});

// Here we have to explicitly export the actions and the reducers as well.
// export const { } = productSlice.actions;
export default productSlice.reducer;

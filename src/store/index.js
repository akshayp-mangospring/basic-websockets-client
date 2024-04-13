import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import productSlice from "./productSlice";
import todoListSlice from "./todoListSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    products: productSlice,
    todoLists: todoListSlice,
  }
});

export default store;

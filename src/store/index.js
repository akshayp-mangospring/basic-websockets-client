import { configureStore } from "@reduxjs/toolkit";
import todoListSlice from "./todoListSlice";

const store = configureStore({
  reducer: {
    todoLists: todoListSlice,
  }
});

export default store;

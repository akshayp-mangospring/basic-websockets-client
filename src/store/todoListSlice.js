import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { backendUrl } from '@constants';
import { getData, postData, deleteData } from '@rest_utils';

const initialState = {
  todoLists: []
};

const todoListSlice = createSlice({
  name: 'todoLists',
  initialState,
  reducers: { },
  extraReducers: (builder) => {
    // Thunk Reducers
    builder.addCase(getTodoLists.fulfilled, (state, action) => {
      state.todoLists = action.payload;
    });

    builder.addCase(addTodoList.fulfilled, (state, action) => {
      state.todoLists.push(action.payload);
    });

    builder.addCase(deleteTodoList.fulfilled, (state, action) => {
      state.todoLists = state.todoLists.filter(({ id }) => id !== action.payload);
    });
  },
});

// Thunk Actions

export const getTodoLists = createAsyncThunk('todolists/get', async () => {
  const todosLists = await getData(`${backendUrl}/todolists`);
  return todosLists;
});

export const addTodoList = createAsyncThunk('todolists/post', async (title) => {
  const todosList = await postData(`${backendUrl}/todolists`, { title });
  return todosList;
});

export const deleteTodoList = createAsyncThunk('todolists/delete', async (id) => {
  await deleteData(`${backendUrl}/todolists/${id}`);
  return id;
});

// Here we have to explicitly export the actions and the reducers as well.
// export const { } = todoListSlice.actions;
export default todoListSlice.reducer;

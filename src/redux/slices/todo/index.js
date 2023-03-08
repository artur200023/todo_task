import { createSlice } from "@reduxjs/toolkit";
import {
  addTodo,
  editItem,
  recieveTodosExtraReducer,
  deleteReducer
} from "../../thunks/todosThunk";

export const todoSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    recieveTodosExtraReducer(builder);
    addTodo(builder);
    editItem(builder);
    deleteReducer(builder)
  },
});

export const selectPost = (state) => state.post.posts;

export const { } = todoSlice.actions;

export const todoReducer = todoSlice.reducer;

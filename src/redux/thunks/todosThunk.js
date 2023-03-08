import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const recieveTodos = createAsyncThunk("recieveTodos", async () => {
  const url = "http://localhost:3030/posts";

  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
});

export const deleteTodo = createAsyncThunk("deleteTodo", async (posts) => {
  const url = `http://localhost:3030/posts/${posts.id}`;

  try {
    const { data } = await axios.delete(url);
    return { data, id: posts.id };
  } catch (error) {
    throw new Error(error.message);
  }
});

const deleteTodoFulfilled = (state, { payload }) => {
  const index = state.posts.findIndex((elm) => elm.id === payload.id);
  state.posts.splice(index, 1);
};

const deleteRejected = (state, { payload }) => {
  state.posts = [];
};

export const deleteReducer = (builder) => {
  builder
    .addCase(deleteTodo.fulfilled, deleteTodoFulfilled)
    .addCase(deleteTodo.rejected, deleteRejected);
};

export const addTodo = createAsyncThunk("addTodo", async (posts) => {
  const url = "http://localhost:3030/posts";

  try {
    const { data } = await axios.post(url, { ...posts });
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
});

export const editItem = createAsyncThunk("editItem", async (posts) => {
  const url = `http://localhost:3030/posts/${posts.id}`;

  try {
    const { data } = await axios.put(url, { ...posts });
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
});

const recieveTodosPending = (state, { payload }) => {
  state.posts = [];
};

const recieveTodosFulfilled = (state, { payload }) => {
  state.posts = payload;
};

const recieveTodosRejected = (state, { payload }) => {
  state.posts = [];
};

export const recieveTodosExtraReducer = (builder) => {
  builder
    .addCase(recieveTodos.pending, recieveTodosPending)
    .addCase(recieveTodos.fulfilled, recieveTodosFulfilled)
    .addCase(recieveTodos.rejected, recieveTodosRejected);
};

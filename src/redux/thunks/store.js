import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { todoReducer } from "../slices/todo";

const mainReducer = combineReducers({
  post: todoReducer,
});

const store = configureStore({
  reducer: mainReducer,
});

export default store;

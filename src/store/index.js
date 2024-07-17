import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./TodoSlice";
const todoStore = configureStore({
  reducer: {
    todo: todoSlice.reducer,
  },
});
export default todoStore;

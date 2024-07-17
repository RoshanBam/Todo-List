import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "Todo",
  initialState: [],
  reducers: {
    addTodoItem: (state, action) => {
      state.push(action.payload);
    },
    deleteTodoItem: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    updateTodoItem: (state, action) => {
      console.log(state);
      const { id, task, dueDate } = action.payload;
      const todo = state.find((item) => item.id === id);
      console.log(todo.id);

      if (todo) {
        if (task) {
          todo.task = task;
        }
        if (dueDate) {
          todo.dueDate = dueDate;
        }
      }
    },
  },
});

export const todoActions = todoSlice.actions;
export default todoSlice;

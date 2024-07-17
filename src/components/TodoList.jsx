import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todoItems = useSelector((state) => state.todo);

  return (
    <ul id="todo-list" className="list-group">
      {todoItems.map((item, index) => (
        <TodoItem key={index} item={item} />
      ))}
    </ul>
  );
};

export default TodoList;

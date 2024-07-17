import React, { useRef, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { todoActions } from "../store/TodoSlice";

const TodoForm = () => {
  const [todoList, setTodoList] = useState([]);
  const inputRef = useRef("");
  const dateRef = useRef("");

  const dispatch = useDispatch();

  const handleAddTodoItemClick = (e) => {
    e.preventDefault();
    const todoName = inputRef.current.value;
    const todoDate = dateRef.current.value;
    dispatch(
      todoActions.addTodoItem({
        todoName,
        todoDate,
        completed: false,
        id: Date.now(),
      })
    );
    dateRef.current.value = "";
    inputRef.current.value = "";
  };

  return (
    <form id="todo-form" className="mb-4 w-100">
      <div className="input-group">
        <input
          ref={inputRef}
          type="text"
          id="todo-input"
          className="form-control"
          placeholder="Add new .."
          required
        />

        <div className="input-group-append">
          <input ref={dateRef} type="date" />
          <button
            className="btn btn-primary"
            type="submit"
            onClick={handleAddTodoItemClick}
          >
            <FaPlus className="btn-add" />
          </button>
        </div>
      </div>
    </form>
  );
};

export default TodoForm;

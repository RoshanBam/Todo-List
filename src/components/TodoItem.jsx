import React from "react";
import { MdEdit, MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { todoActions } from "../store/TodoSlice";

const TodoItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleDeleteButtonClick = () => {
    dispatch(todoActions.deleteTodoItem(item.id));
  };

  const handleEditButtonClick = () => {
    const updatedItem = prompt("Enter Updated Task", item.todoName);
    const updatedDate = prompt("Enter Updated Date", item.todoDate);

    const updatedTodo = { id: item.id };

    if (updatedItem) {
      updatedTodo.task = updatedItem;
    } else {
      updatedTodo.task = item.todoName;
    }

    if (updatedDate) {
      updatedTodo.dueDate = updatedDate;
    } else {
      updatedTodo.dueDate = todo.todoDate;
    }

    dispatch(todoActions.updateTodoItem(updatedTodo));
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <input type="checkbox" className="mr-2" />

      <span className="task">{item.todoName}</span>
      <span className="due-date">{item.todoDate}</span>
      <div>
        <button
          className="btn btn-sm btn-edit mr-2"
          onClick={handleEditButtonClick}
        >
          <MdEdit />
        </button>
        <button
          className="btn btn-sm btn-delete"
          onClick={handleDeleteButtonClick}
        >
          <MdDelete />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;

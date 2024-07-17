import React from "react";
import { FaCalendarCheck } from "react-icons/fa";

const TodoHeader = () => {
  return (
    <div className="card-header text-center">
      <h2>
        <FaCalendarCheck className="todo-header" />
        My Todo
      </h2>
    </div>
  );
};

export default TodoHeader;

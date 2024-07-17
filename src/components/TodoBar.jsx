import React from "react";

const TodoBar = () => {
  return (
    <div className="d-flex justify-content-between align-items-center mb-3">
      <div>
        <label for="filter" className="mr-2">
          Filter
        </label>
        <select id="filter" className="form-control d-inline-block w-auto">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
        </select>
      </div>
      <div>
        <label for="sort" className="mr-2">
          Sort
        </label>
        <select id="sort" className="form-control d-inline-block w-auto">
          <option value="added-date">Added date</option>
          <option value="due-date">Due date</option>
        </select>
      </div>
    </div>
  );
};

export default TodoBar;

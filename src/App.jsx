import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoHeader from "./components/TodoHeader";
import TodoForm from "./components/TodoForm";
import TodoBar from "./components/TodoBar";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div className="container mt-5">
      <div className="card">
        <TodoHeader />
        <div className="card-body">
          <TodoForm />
          <TodoBar />
          <TodoList />
        </div>
      </div>
    </div>
  );
};

export default App;

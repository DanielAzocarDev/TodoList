import React, { useContext } from "react";
import { TodoContext } from "../../TodoContext/todoContext";
import "./Todo.css";

const Todo = ({ todo }) => {
  const { removeTodo } = useContext(TodoContext);
  return (
    <div
      className="todo"
      onClick={() => {
        removeTodo(todo.id);
      }}
    >
      {todo.title}
    </div>
  );
};

export default Todo;

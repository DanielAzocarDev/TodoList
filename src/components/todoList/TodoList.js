import React, { useContext } from "react";
import Todo from "../todo/Todo";
import { TodoContext } from "../../TodoContext/todoContext";

import "./TodoList.css";

const TodoList = () => {
  const { todos } = useContext(TodoContext);
  return todos.length ? (
    <div className="todo-list">
      {todos.map((todo) => {
        return <Todo todo={todo} key={todo.id} />;
      })}
    </div>
  ) : (
    <p>You don't have any ToDos</p>
  );
};

export default TodoList;

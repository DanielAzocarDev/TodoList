import React, { useContext } from "react";
import Todo from "../todo/Todo";
import { TodoContext } from "../../TodoContext/todoContext";
const TodoList = () => {
  const { todos } = useContext(TodoContext);
  return todos.length ? (
    <div>
      {todos.map((todo) => {
        return <Todo todo={todo} key={todo.id} />;
      })}
    </div>
  ) : (
    <p>You don't have any ToDos</p>
  );
};

export default TodoList;

import React, { useContext, useState } from "react";
import { TodoContext } from "../../TodoContext/todoContext";
import { v4 as uuid } from "uuid";

const TodoForm = () => {
  const { addTodo } = useContext(TodoContext);

  const [title, setTitle] = useState("");

  const handlerChange = (e) => {
    setTitle(e.target.value);
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    addTodo({ title: title, id: uuid() });

    setTitle("");
  };
  return (
    <form onSubmit={handlerSubmit}>
      <label htmlFor="title">Add a new ToDo</label>
      <input type="text" id="title" onChange={handlerChange} value={title} />
      <button>Add ToDo</button>
    </form>
  );
};

export default TodoForm;

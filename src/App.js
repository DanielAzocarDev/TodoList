import React from "react";
import TodoForm from "./components/todoForm/TodoForm";
import TodoList from "./components/todoList/TodoList";
import TodoContextProvider from "./TodoContext/todoContext";

import "./App.css";

function App() {
  return (
    <TodoContextProvider className="App">
      <TodoForm />
      <TodoList />
    </TodoContextProvider>
  );
}

export default App;

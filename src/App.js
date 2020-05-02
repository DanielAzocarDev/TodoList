import React from "react";
import TodoForm from "./components/todoForm/TodoForm";
import TodoList from "./components/todoList/TodoList";
import TodoContextProvider from "./TodoContext/todoContext";

import "./App.css";

function App() {
  return (
    <TodoContextProvider className="App">
      <div className="container">
        <h1>ToDo List!</h1>
        <TodoForm />
        <TodoList />
      </div>
    </TodoContextProvider>
  );
}

export default App;

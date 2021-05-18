import React, { useState, useRef, useEffect } from "react";
import TodoList from "./TodoList.js";
import { v4 as uuidv4 } from "uuid";

function App() {
  const LOCAL_STORAGE_KEY = "john.white";
  const [todos, setTodos] = useState([]);
  const inputValue = useRef();
  /**To get from todo form local storage */
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  /*To save to local storage*/
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);
  

  /**To add to todo list */
  const addTodo = () => {
    let name = inputValue.current.value;
    if (name === "") return alert("Enter Task");
    const newTask = {
      name,
      id: uuidv4(),
      completed: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTask]);
    inputValue.current.value = "";
  };

  //  Toggle Todo to tcompleted or Incomplete

  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  };
  //  CLear Completed

  const clearTodo = () => {
    const newTodo = todos.filter((todo) => !todo.completed);
    setTodos(newTodo);
  };

  // Count Todo
  const uncompleteder = todos.filter((todo) => !todo.completed);
  return (
    <div>
      <h1>TODO APP</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input ref={inputValue} type="text" />
      <button onClick={addTodo}>Add Todo</button>
      <button onClick={clearTodo}>Clear Completed</button>
      <div>{uncompleteder.length} left to do</div>
    </div>
  );
}

export default App;
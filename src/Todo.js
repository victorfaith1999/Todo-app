import React from "react";

const Todo = ({ todo, toggleTodo }) => {
  const handleTodoClick = () =>{
    toggleTodo(todo.id)
  }

  return (
    <div>
      <input type="checkbox" checked={todo.completed} onClick={handleTodoClick}/>

      {todo.name}
    </div>
  );
};

export default Todo;
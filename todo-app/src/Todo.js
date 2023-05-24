import React from "react";

const Todo = ({ todo, dispatch }) => {
  const handleToggle = () => {
    dispatch({ type: "TOGGLE_TODO", payload: todo.id });
  };

  const handleDelete = () => {
    dispatch({ type: "DELETE_TODO", payload: todo.id });
  };

  return (
    <div>
      <input type="checkbox" checked={todo.completed} onChange={handleToggle} />
      <span
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        {todo.text}
      </span>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Todo;
